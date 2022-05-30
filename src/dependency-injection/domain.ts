import AppendService from "../domain/append-service";
import ImmflyInMemoryRepository from "../domain/immfly-in-memory-repository";
import ReverseService from "../domain/reverse-service";
import ImmflyRepository from "../infrastructure/immfly-repository";
// Dependencies
import redisClient from "../infrastructure/redis-client";

export const immflyRepository = new ImmflyRepository();
export const reverseService = new ReverseService();
export const appendService = new AppendService();
export const redisRepository = new ImmflyInMemoryRepository(redisClient);
