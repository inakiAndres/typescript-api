import ReverseService from "../../domain/reverse-service";
import { UseCase } from "./use-case";

export default class ReverseWord implements UseCase {
  #reverseService: ReverseService | null = null;

  constructor(reverseService: ReverseService) {
    this.#reverseService = reverseService;
    this.run = this.run.bind(this);
  }
  async run(word: string) {
    if (!this.#reverseService) {
      throw new Error(
        "Check your reverse service, it is not defined or is null"
      );
    }
    return this.#reverseService.reverseWord(word);
  }
}
