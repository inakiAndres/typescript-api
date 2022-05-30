/* eslint-disable @typescript-eslint/no-unused-vars */
import { Country } from "../types/country-type";
import { IFiltersOptions } from "../types/filter-type";

export default class ThirdPartyRepository {
  async getCountries(filters: IFiltersOptions): Promise<Country[]> {
    throw new Error(
      "Implement your concreate method getCountries for your concrete ThirdPartyRepository"
    );
  }
}
