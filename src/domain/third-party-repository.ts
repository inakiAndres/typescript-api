import { CountryType } from "../types/country-type";
import { IFiltersOptions } from "../types/filter-type";

export default class ThirdPartyRepository {
  async getCountries(filters: IFiltersOptions): Promise<CountryType[]> {
    throw new Error(
      "Implement your concreate method getCountries for your concrete ThirdPartyRepository"
    );
  }
}
