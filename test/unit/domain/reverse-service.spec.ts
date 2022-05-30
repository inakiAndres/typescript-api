import { reverseService } from "../../../src/dependency-injection/domain";
import {
  RESPONSE_REVERSED,
  WORD,
} from "../../mocks/reverse-endpoint-responses";

describe("DOMAIN SERVICE - Reverse Service", () => {
  describe("HAPPY PATHs", () => {
    it("should return an array with the reversed word with vowels in uppercase", async () => {
      const response = await reverseService.reverseWord(WORD);
      expect(response).toEqual(RESPONSE_REVERSED);
    });
  });
});
