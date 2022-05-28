import { Request, Response } from "express";
import httpStatus from "http-status";

import { UseCase } from "../application/use-cases/use-case";
import { Controller } from "./Controller";

export default class CountryGetController implements Controller {
  countryCommand: UseCase;
  constructor(countryCommand: UseCase) {
    this.countryCommand = countryCommand;

    this.run = this.run.bind(this);
  }

  async run(req: Request, res: Response) {
    const filters = req.query;
    const response = await this.countryCommand.run(filters);

    res.status(httpStatus.OK).send(response);
  }
}
