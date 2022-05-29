import ThirdPartyRepository from "../../domain/third-party-repository";
import { IFiltersOptions } from "../../types/filter-type";
import { UseCase } from "./use-case";

export default class Country implements UseCase {
  #externalRepository: ThirdPartyRepository | null = null;

  constructor(externalRepository: any) {
    this.#externalRepository = externalRepository;

    this.run = this.run.bind(this);
  }
  async run(filters: IFiltersOptions) {
    if (!this.#externalRepository) {
      throw new Error(
        "Check your external repository, it is not defined or is null"
      );
    }
    const countriesData = this.#externalRepository.getCountries(filters);

    return countriesData;
  }
}
