import { appendService } from "../../../src/dependency-injection/domain";
import { IAppendOptions } from "../../../src/types/append-type";
import { RESPONSE_APPEND } from "../../mocks/append-endpoint-responses";

const options: IAppendOptions = {
  start: "hello",
  end: "bye",
};

describe("DOMAIN SERVICE - Append Service", () => {
  describe("HAPPY PATHs", () => {
    it("should return an array with the appended array", async () => {
      const response = await appendService.appendOptions(options);
      expect(response).toEqual(RESPONSE_APPEND);
    });
  });
});
