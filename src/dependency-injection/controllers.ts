//Dependencies
//Controllers
import CountryGetController from "../controllers/country-get-controller";
import ReverseController from "../controllers/reverse-controller";
import { countryCommand, reverseCommand } from "./use-cases";

export const countryGetController: CountryGetController =
  new CountryGetController(countryCommand);

export const reverseController: ReverseController = new ReverseController(
  reverseCommand
);
