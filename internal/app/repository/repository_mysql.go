package repository

import (
	"database/sql"
	"fmt"
	"github.com/jwma/jump-jump/internal/app/db/mysql"
	"github.com/jwma/jump-jump/internal/app/models"
	"github.com/jwma/jump-jump/internal/app/utils"
	"log"
	"time"
)

type URL struct {
	ID         int64      `json:"-"`
	LongUrl    string     `json:"long_url"`
	HASH       string     `json:"hash"`
	Clicks     int64      `json:"clicks"`
	createTime time.Time  `json:"created_time"`
	updateTime *time.Time `json:"update_time"`
	updateUser string	  `json:"update_user"`
	status     string	  `json:"status"`
}

func Find(hash string) *URL {
	var u = new(URL)
	u.HASH = hash
	u.Find()
	return u
}

// redis的备份存储
func BakSave(shortLink *models.ShortLink) error {
	tx, _ := mysql.Db.Begin()
	defer tx.Rollback()

	_, err := tx.Exec("INSERT INTO `links` (`long_url`,`hash`,`create_time`, `update_user`, `status`) values (?,?,?,?,?)", shortLink.Url, shortLink.Id, shortLink.CreateTime, shortLink.CreatedBy, shortLink.IsEnable)
	if err != nil {
		log.Println("insert mysql bakSave error", err)
		return err
	}

	tx.Commit()
	return nil
}

func Save(longUrl, customHash string) (*URL, error) {
	var url = &URL{
		createTime: time.Now().UTC(),
	}
	if customHash != "" {
		var count int
		row := mysql.Db.QueryRow("select count(1) count from `links` where `hash` = ? limit 1", customHash)
		if err := row.Scan(&count); err != nil || count > 0 {
			customHash = ""
		}
	}
	tx, _ := mysql.Db.Begin()
	defer tx.Rollback()

	res, err := tx.Exec("INSERT INTO `links` (`long_url`,`hash`,`created_at`) values (?,?,?)", longUrl, customHash, url.createTime)
	if err != nil {
		return nil, err
	}
	id, err := res.LastInsertId()
	if err != nil {
		return nil, err
	}

	url.ID = id
	url.LongUrl = longUrl

	if customHash == "" {
		hash := utils.Encode(id)
		tx.Exec("UPDATE `links` SET `hash`=? WHERE `id`=?", hash, id)
		url.HASH = hash
	} else {
		url.HASH = customHash
	}
	tx.Commit()

	return url, err
}

func FindLongUrl(hash string) string {
	var u = new(URL)
	u.HASH = hash
	u.Find()

	return u.LongUrl
}

func (u *URL) Find() *URL {
	var url string
	var clicks int64
	var created_at time.Time

	err := mysql.Db.QueryRow("SELECT `long_url`,`clicks`,`created_at` FROM `links` WHERE `hash` = ?", u.HASH).Scan(&url, &clicks, &created_at)
	if err != nil {
		return nil
	}
	switch {
	case err == sql.ErrNoRows:
		return nil
	case err != nil:
		fmt.Printf("SQL query got error : %+v\n", err)
		return nil
	default:
		u.LongUrl = url
		u.Clicks = clicks
		u.createTime = created_at
	}

	return u
}
