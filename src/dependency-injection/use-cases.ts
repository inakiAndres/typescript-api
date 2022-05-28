import Country from "../application/use-cases/country";
import ImmflyRepository from "../infrastructure/immfly-repository";

const immflyRepository = new ImmflyRepository();

export const countryCommand: Country = new Country(immflyRepository);
