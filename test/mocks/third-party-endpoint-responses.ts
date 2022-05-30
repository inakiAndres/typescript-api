export const RESPONSE_THIRD_PARTY = [
  {
    country: "Austria",
    code: "AT",
    vat: 20,
  },
  {
    country: "Belgium",
    code: "BE",
    vat: 21,
  },
  {
    country: "Bulgaria",
    code: "BG",
    vat: 20,
  },
  {
    country: "Croatia",
    code: "HR",
    vat: 25,
  },
  {
    country: "Cyprus",
    code: "CY",
    vat: 19,
  },
  {
    country: "Czech Republic",
    code: "CZ",
    vat: 21,
  },
  {
    country: "Denmark",
    code: "DK",
    vat: 25,
  },
  {
    country: "Estonia",
    code: "EE",
    vat: 20,
  },
  {
    country: "Finland",
    code: "FI",
    vat: 24,
  },
  {
    country: "France",
    code: "FR",
    vat: 20,
  },
  {
    country: "Germany",
    code: "DE",
    vat: 19,
  },
  {
    country: "Greece",
    code: "EL",
    vat: 24,
  },
  {
    country: "Hungary",
    code: "HU",
    vat: 27,
  },
  {
    country: "Ireland",
    code: "IE",
    vat: 23,
  },
  {
    country: "Italy",
    code: "IT",
    vat: 22,
  },
  {
    country: "Latvia",
    code: "LV",
    vat: 21,
  },
  {
    country: "Lithuania",
    code: "LT",
    vat: 21,
  },
  {
    country: "Luxembourg",
    code: "LU",
    vat: 17,
  },
  {
    country: "Malta",
    code: "MT",
    vat: 18,
  },
  {
    country: "Netherlands",
    code: "NL",
    vat: 21,
  },
  {
    country: "Poland",
    code: "PO",
    vat: 23,
  },
  {
    country: "Portugal",
    code: "PT",
    vat: 23,
  },
  {
    country: "Romania",
    code: "RO",
    vat: 20,
  },
  {
    country: "Slovakia",
    code: "SK",
    vat: 20,
  },
  {
    country: "Slovenia",
    code: "SI",
    vat: 22,
  },
  {
    country: "Spain",
    code: "ES",
    vat: 21,
  },
  {
    country: "Sweden",
    code: "SW",
    vat: 25,
  },
  {
    country: "United Kingdom",
    code: "GB",
    vat: 20,
  },
];

export const RESPONSE_WITHOUT_FILTERS = [
  {
    country: "Austria",
    code: "AT",
    vat: 20,
  },
  {
    country: "Belgium",
    code: "BE",
    vat: 21,
  },
  {
    country: "Bulgaria",
    code: "BG",
    vat: 20,
  },
  {
    country: "Croatia",
    code: "HR",
    vat: 25,
  },
  {
    country: "Cyprus",
    code: "CY",
    vat: 19,
  },
  {
    country: "Czech Republic",
    code: "CZ",
    vat: 21,
  },
  {
    country: "Denmark",
    code: "DK",
    vat: 25,
  },
  {
    country: "Estonia",
    code: "EE",
    vat: 20,
  },
  {
    country: "Finland",
    code: "FI",
    vat: 24,
  },
  {
    country: "France",
    code: "FR",
    vat: 20,
  },
  {
    country: "Germany",
    code: "DE",
    vat: 19,
  },
  {
    country: "Greece",
    code: "EL",
    vat: 24,
  },
  {
    country: "Hungary",
    code: "HU",
    vat: 27,
  },
  {
    country: "Ireland",
    code: "IE",
    vat: 23,
  },
  {
    country: "Italy",
    code: "IT",
    vat: 22,
  },
  {
    country: "Latvia",
    code: "LV",
    vat: 21,
  },
  {
    country: "Lithuania",
    code: "LT",
    vat: 21,
  },
  {
    country: "Luxembourg",
    code: "LU",
    vat: 17,
  },
  {
    country: "Malta",
    code: "MT",
    vat: 18,
  },
  {
    country: "Netherlands",
    code: "NL",
    vat: 21,
  },
  {
    country: "Poland",
    code: "PO",
    vat: 23,
  },
  {
    country: "Portugal",
    code: "PT",
    vat: 23,
  },
  {
    country: "Romania",
    code: "RO",
    vat: 20,
  },
  {
    country: "Slovakia",
    code: "SK",
    vat: 20,
  },
  {
    country: "Slovenia",
    code: "SI",
    vat: 22,
  },
  {
    country: "Spain",
    code: "ES",
    vat: 21,
  },
  {
    country: "Sweden",
    code: "SW",
    vat: 25,
  },
  {
    country: "United Kingdom",
    code: "GB",
    vat: 20,
  },
];

export const RESPONSE_FILTER = [
  {
    country: "Finland",
    code: "FI",
    vat: 24,
  },
  {
    country: "Ireland",
    code: "IE",
    vat: 23,
  },
  {
    country: "Netherlands",
    code: "NL",
    vat: 21,
  },
  {
    country: "Poland",
    code: "PO",
    vat: 23,
  },
];

export const RESPONSE_FILTER_ORDER_ASC = [
  {
    country: "Netherlands",
    code: "NL",
    vat: 21,
  },
  {
    country: "Ireland",
    code: "IE",
    vat: 23,
  },
  {
    country: "Poland",
    code: "PO",
    vat: 23,
  },
  {
    country: "Finland",
    code: "FI",
    vat: 24,
  },
];

export const RESPONSE_FILTER_ORDER_DESC = [
  { country: "Finland", code: "FI", vat: 24 },
  { country: "Ireland", code: "IE", vat: 23 },
  { country: "Poland", code: "PO", vat: 23 },
  { country: "Netherlands", code: "NL", vat: 21 },
];

export const ERROR_ORDER = {
  errors: [
    {
      value: "zzz",
      msg: "Invalid order only can be asc or desc",
      param: "order",
      location: "query",
    },
  ],
};
