const IORedis = require("ioredis");
const redis =  new IORedis()

redis.set("foo", "test")