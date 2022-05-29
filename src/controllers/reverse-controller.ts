import { Request, Response } from "express";
import httpStatus from "http-status";

import { UseCase } from "../application/use-cases/use-case";

export default class ReverseController {
  reverseCommand: UseCase;
  constructor(reverseCommand: UseCase) {
    this.reverseCommand = reverseCommand;

    this.run = this.run.bind(this);
  }

  async run(req: Request, res: Response): Promise<void> {
    const { word } = req.params;
    const response = await this.reverseCommand.run(word);

    res.status(httpStatus.OK).send(response);
  }
}
