import { Country } from "../../types/country-type";
import { IFiltersOptions } from "../../types/filter-type";

const sortInAscOrder = (a: Country, b: Country) => {
  const { vat: vatA } = a;
  const { vat: vatB } = b;
  return vatA > vatB ? 1 : vatA < vatB ? -1 : 0;
};

const sortInDescOrder = (a: Country, b: Country) => {
  const { vat: vatA } = a;
  const { vat: vatB } = b;
  return vatA > vatB ? -1 : vatA < vatB ? 1 : 0;
};

export default function countryAdapter(
  countriesData: Country[],
  filters: IFiltersOptions
): Country[] {
  const { filter, order } = filters;
  let countries: Country[] = [];
  if (filter) {
    countriesData.filter((countryData: Country) => {
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
