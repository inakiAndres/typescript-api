import { Router } from "express";
import { query } from "express-validator";

import {
  appendController,
  countryGetController,
  reverseController,
} from "../dependency-injection/controllers";
import { validation } from "../middlewares/validators/validator";

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
  validation,
  countryGetController.run
);

router.get("/reverse/:word", reverseController.run);

router.get(
  "/append",
  query("start").notEmpty().isString().withMessage("Start param is required"),
  query("end").notEmpty().isString().withMessage("End param is required"),
  validation,
  appendController.run
);

export default router;
