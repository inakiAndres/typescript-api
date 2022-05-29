import { Router } from "express";
import { query } from "express-validator";

import {
  countryGetController,
  reverseController,
} from "../dependency-injection/controllers";
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

router.get("/reverse/:word", reverseController.run);

export default router;
