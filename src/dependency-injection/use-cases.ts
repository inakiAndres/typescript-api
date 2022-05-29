// Use Cases
import Country from "../application/use-cases/country";
import ReverseWord from "../application/use-cases/reverse-word";
// Dependencies
import ReverseService from "../domain/reverse-service";
import ImmflyRepository from "../infrastructure/immfly-repository";

const immflyRepository = new ImmflyRepository();
const reverseService = new ReverseService();

export const countryCommand: Country = new Country(immflyRepository);
export const reverseCommand: ReverseWord = new ReverseWord(reverseService);
