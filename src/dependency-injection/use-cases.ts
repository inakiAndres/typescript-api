// Use Cases
import Append from "../application/use-cases/append";
import Country from "../application/use-cases/country";
import ReverseWord from "../application/use-cases/reverse-word";
// Dependencies
import AppendService from "../domain/append-service";
import ReverseService from "../domain/reverse-service";
import ImmflyRepository from "../infrastructure/immfly-repository";

const immflyRepository = new ImmflyRepository();
const reverseService = new ReverseService();
const appendService = new AppendService();

export const countryCommand: Country = new Country(immflyRepository);
export const reverseCommand: ReverseWord = new ReverseWord(reverseService);
export const appendCommand: Append = new Append(appendService);
