import AppendService from "../../domain/append-service";
import { IAppendOptions } from "../../types/append-type";
import { UseCase } from "./use-case";

export default class Append implements UseCase {
  #appendService: AppendService | null = null;

  constructor(appendService: AppendService) {
    this.#appendService = appendService;
    this.run = this.run.bind(this);
  }
  async run(options: IAppendOptions) {
    if (!this.#appendService) {
      throw new Error(
        "Check your append service, it is not defined or is null"
      );
    }
    return this.#appendService.appendOptions(options);
  }
}
