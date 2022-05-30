import Append from "../../../../src/application/use-cases/append";
import { appendService } from "../../../../src/dependency-injection/domain";
import { IAppendOptions } from "../../../../src/types/append-type";
import { RESPONSE_APPEND } from "../../../mocks/append-endpoint-responses";

const filter: IAppendOptions = {
  start: "hello",
  end: "bye",
};

describe("USE CASE - Append", () => {
  const appendCommand = new Append(appendService);
  beforeAll(() => {
    appendService.appendOptions = jest.fn().mockResolvedValue(RESPONSE_APPEND);
  });
  describe("HAPPY PATHs", () => {
    it("should return an array with the appended array", async () => {
      const response = await appendCommand.run(filter);
      expect(response).toEqual(RESPONSE_APPEND);
    });
  });
});
