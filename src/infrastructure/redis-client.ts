import * as redis from "redis";

const option = {
  host: process.env.REDIS_HOSTNAME,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
};

const redisClient = redis.createClient(option);

redisClient.on("connect", () => {
  console.log("connected to redis successfully!");
});

redisClient.on("error", (error) => {
  console.log("Redis connection error :", error);
});

(async () => {
  // const authOptions = {
  //   password: process.env.REDIS_PASSWORD,
  // };
  // await redisClient.auth(authOptions).catch((err) => {
  //   console.log("Redis auth error: " + err.message);
  // });
  await redisClient.connect().catch((err) => {
    console.log("Redis connect error: " + err.message);
  });
})();

export default redisClient;
