package server

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/jwma/jump-jump/internal/app/config"
	_ "github.com/jwma/jump-jump/internal/app/config"
	"github.com/jwma/jump-jump/internal/app/db"
	"github.com/jwma/jump-jump/internal/app/routers"
	"github.com/thoas/go-funk"
)

func setupDB() error {
	c := db.GetRedisClient()
	pong := c.Ping()
	return pong.Err()
}

// 检查 ALLOWED_HOSTS 设置正确设置
func allowHostsChecking() error {
	if gin.Mode() == gin.ReleaseMode {
		allowHost, _ := config.GetByBlock("common","ALLOWED_HOSTS")
		if funk.ContainsString([]string{"", "*"}, allowHost) {
			return fmt.Errorf("please set ALLOWED_HOSTS environment variable when GIN_MODE=release.\n")
		}
	}

	return nil
}

func Run(addr ...string) error {
	// security checking
	err := allowHostsChecking()

	if err != nil {
		return err
	}

	err = setupDB()

	if err != nil {
		return err
	}

	err = config.SetupConfig(db.GetRedisClient())

	if err != nil {
		return err
	}

	router := routers.SetupRouter()
	err = router.Run(addr...)
	return err
}

func RunLanding(addr ...string) error {
	err := setupDB()

	if err != nil {
		return err
	}

	err = config.SetupConfig(db.GetRedisClient())

	if err != nil {
		return err
	}

	router := routers.SetupLandingRouter()
	err = router.Run(addr...)
	return err
}
