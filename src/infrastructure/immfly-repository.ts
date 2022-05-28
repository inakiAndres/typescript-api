import ThirdPartyRepository from "../domain/third-party-repository";
import { Country } from "../types/country-type";
import { IFiltersOptions } from "../types/filter-type";
import { ServerResponse } from "../types/server-response-type";
import countryAdapter from "./adapters/country-adapter";
import { sendRequest } from "./client";

export default class ImmflyRepository extends ThirdPartyRepository {
  constructor() {
    super();
    this.getCountries = this.getCountries.bind(this);
  }
  async getCountries(filters: IFiltersOptions): Promise<Country[]> {
    const response: ServerResponse = await sendRequest(
      "GET",
      "https://api.jsonbin.io/b/5f69afbe65b18913fc510ce8"
    );
    return countryAdapter(response.data, filters);
  }
}
