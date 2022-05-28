import { Router } from "express";
import { query } from "express-validator";

import { countryGetController } from "../dependency-injection/controllers";
import { checkCountries } from "../middlewares/validators/countries-validator";

const router = Router();

router.get(
  "/countries",
  query("filter")
    .optional(true)
    .isString()
    .withMessage("Invalid filter, must be a string"),
  query("order")
    .optional(true)
    .isString()
    .isIn(["asc", "desc"])
    .withMessage("Invalid order only can be asc or desc"),
  checkCountries,
  countryGetController.run
);

export default router;
