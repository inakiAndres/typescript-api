import express from "express";
import { Result, ValidationError, validationResult } from "express-validator";

export function validation(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}
