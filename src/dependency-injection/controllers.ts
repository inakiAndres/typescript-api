//Controllers
import AppendController from "../controllers/append-controller";
import CountryGetController from "../controllers/country-get-controller";
import ReverseController from "../controllers/reverse-controller";
//Dependencies
import { appendCommand, countryCommand, reverseCommand } from "./use-cases";

export const countryGetController: CountryGetController =
  new CountryGetController(countryCommand);

export const reverseController: ReverseController = new ReverseController(
  reverseCommand
);

export const appendController: AppendController = new AppendController(
  appendCommand
);
