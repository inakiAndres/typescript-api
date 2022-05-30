import { CountryType } from "../../types/country-type";
import { IFiltersOptions } from "../../types/filter-type";

const sortInAscOrder = (a: CountryType, b: CountryType) => {
  const { vat: vatA } = a;
  const { vat: vatB } = b;
  return vatA > vatB ? 1 : vatA < vatB ? -1 : 0;
};

const sortInDescOrder = (a: CountryType, b: CountryType) => {
  const { vat: vatA } = a;
  const { vat: vatB } = b;
  return vatA > vatB ? -1 : vatA < vatB ? 1 : 0;
};

export default function countryAdapter(
  countriesData: CountryType[],
  filters: IFiltersOptions
): CountryType[] {
  const { filter, order } = filters;
  let countries: CountryType[] = [];
  if (filter) {
    countriesData.filter((countryData: CountryType) => {
      const { country, code } = countryData;
      if (
        country.toLowerCase().includes(filter.toLowerCase()) ||
        code.toLowerCase().includes(filter.toLowerCase())
      ) {
        countries.push(countryData);
      }
    });
  } else {
    countries = countriesData;
  }

  if (order) {
    if (order === "asc") {
      countries.sort(sortInAscOrder);
    } else if (order === "desc") {
      countries.sort(sortInDescOrder);
    }
  }
  return countries;
}
