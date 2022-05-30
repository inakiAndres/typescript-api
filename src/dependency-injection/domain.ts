import AppendService from "../domain/append-service";
import ReverseService from "../domain/reverse-service";
import ImmflyRepository from "../infrastructure/immfly-repository";

export const immflyRepository = new ImmflyRepository();
export const reverseService = new ReverseService();
export const appendService = new AppendService();
