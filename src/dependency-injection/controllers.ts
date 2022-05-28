//Dependencies
//Controllers
import CountryGetController from "../controllers/country-get-controller";
import { countryCommand } from "./use-cases";

export const countryGetController: CountryGetController =
  new CountryGetController(countryCommand);
