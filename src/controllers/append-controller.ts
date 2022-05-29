import { Request, Response } from "express";
import httpStatus from "http-status";

import { UseCase } from "../application/use-cases/use-case";
import { IAppendOptions } from "../types/append-type";
import { Controller } from "./Controller";

export default class AppendController implements Controller {
  appendCommand: UseCase;
  constructor(appendCommand: UseCase) {
    this.appendCommand = appendCommand;

    this.run = this.run.bind(this);
  }

  async run(req: Request, res: Response) {
    const options: IAppendOptions = req.query;
    const response = await this.appendCommand.run(options);

    res.status(httpStatus.OK).send(response);
  }
}
