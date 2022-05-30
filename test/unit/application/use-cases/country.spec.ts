import CountryUC from "../../../../src/application/use-cases/country";
import { immflyRepository } from "../../../../src/dependency-injection/domain";
import { IFiltersOptions } from "../../../../src/types/filter-type";
import { RESPONSE_FILTER_ORDER_ASC } from "../../../mocks/country-endpoint-responses";

const filters: IFiltersOptions = {
  filter: "and",
  order: "asc",
};

describe("USE CASE - Append", () => {
  const countryCommand = new CountryUC(immflyRepository);
  beforeAll(() => {
    immflyRepository.getCountries = jest
      .fn()
      .mockResolvedValue(RESPONSE_FILTER_ORDER_ASC);
  });
  describe("HAPPY PATHs", () => {
    it("should return an array with the appended array", async () => {
      const response = await countryCommand.run(filters);
      expect(response).toEqual(RESPONSE_FILTER_ORDER_ASC);
    });
  });
});
