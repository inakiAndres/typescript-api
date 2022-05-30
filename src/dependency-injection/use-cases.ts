// Use Cases
import Append from "../application/use-cases/append";
import Country from "../application/use-cases/country";
import ReverseWord from "../application/use-cases/reverse-word";
// Dependencies
import { appendService, immflyRepository, reverseService } from "./domain";

export const countryCommand: Country = new Country(immflyRepository);
export const reverseCommand: ReverseWord = new ReverseWord(reverseService);
export const appendCommand: Append = new Append(appendService);
