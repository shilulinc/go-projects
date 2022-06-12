package db

import (
	"github.com/go-redis/redis"
	"github.com/jwma/jump-jump/internal/app/config"
	"strconv"
)

var client *redis.Client

var defaultDbIdx, _ = config.GetByBlock("J2_API","REDIS_DB")
var redisHost,_ = config.GetByBlock("J2_API","REDIS_HOST")
var redisPassword, _ = config.GetByBlock("J2_API","REDIS_PASSWORD")

func GetRedisClient() *redis.Client {
	dbIdx, err := strconv.Atoi(defaultDbIdx)
	if err != nil {
		panic("please set REDIS_DB env")
	}

	if client == nil {
		client = redis.NewClient(&redis.Options{
			Addr:        redisHost,
			Password:    redisPassword,
			DB:          dbIdx,
			IdleTimeout: -1,
		})
	}
	return client
}
