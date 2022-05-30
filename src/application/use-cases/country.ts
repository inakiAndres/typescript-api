import ImmflyInMemoryRepository from "../../domain/immfly-in-memory-repository";
import ThirdPartyRepository from "../../domain/third-party-repository";
import { CountryType } from "../../types/country-type";
import { IFiltersOptions } from "../../types/filter-type";
import { UseCase } from "./use-case";

export default class Country implements UseCase {
  #externalRepository: ThirdPartyRepository | null = null;
  #redisRepository: ImmflyInMemoryRepository | null = null;

  constructor(
    externalRepository: ThirdPartyRepository,
    redisRepository: ImmflyInMemoryRepository
  ) {
    this.#externalRepository = externalRepository;
    this.#redisRepository = redisRepository;

    this.run = this.run.bind(this);
  }

  async getCachedData() {
    if (!this.#redisRepository) {
      throw new Error(
        "Check your redis repository, it is not defined or is null"
      );
    }
    const cachedData = await this.#redisRepository.getCountriesContent();
    console.log("Getting cached data", cachedData);
    if (!cachedData || !cachedData.content || !cachedData.expirationDate) {
      return null;
    }

    return cachedData;
  }

  async addDataToCache(content: CountryType[]) {
    if (!this.#redisRepository) {
      throw new Error(
        "Check your redis repository, it is not defined or is null"
      );
    }
    await this.#redisRepository.addCountriesContent(content);
  }

  hasExpired(expirationDate: Date) {
    return new Date() > expirationDate;
  }

  async tryToUpdateCountriesContent(filters: IFiltersOptions) {
    if (!this.#externalRepository) {
      throw new Error(
        "Check your external repository, it is not defined or is null"
      );
    }
    const content: CountryType[] = await this.#externalRepository.getCountries(
      filters
    );
    console.log("Updating countries content", content);
    this.addDataToCache(content);
    return content;
  }

  async getCountriesData(filters: IFiltersOptions, skipCache: string) {
    try {
      // First, let's try to get the content from the cache, if present
      const cachedData = await this.getCachedData();

      // There is data in the cache
      if (cachedData && !skipCache) {
        const { content: oldContent, expirationDate } = cachedData;

        // The data in the cache is still valid, so we return it
        if (!this.hasExpired(expirationDate)) {
          return oldContent;
        }

        // The data in the cache is outdated, so we try to get new content
        // But if that fails, we better return the old content instead of errors
        const newContent = await this.tryToUpdateCountriesContent(filters);
        return newContent || oldContent;
      }

      // There is no data in the cache or we are skipping it, so we try to update it
      return this.tryToUpdateCountriesContent(filters);
    } catch (error) {
      return error;
    }
  }

  async run(filters: IFiltersOptions, skipCache: string) {
    const countriesData = await this.getCountriesData(filters, skipCache);
    console.log("Countries data", countriesData);
    return countriesData;
  }
}
