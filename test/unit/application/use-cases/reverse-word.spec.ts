import ReverseWord from "../../../../src/application/use-cases/reverse-word";
import { reverseService } from "../../../../src/dependency-injection/domain";
import {
  RESPONSE_REVERSED,
  WORD,
} from "../../../mocks/reverse-endpoint-responses";

describe("USE CASE - Append", () => {
  const reverseCommand = new ReverseWord(reverseService);
  beforeAll(() => {
    reverseService.reverseWord = jest.fn().mockResolvedValue(RESPONSE_REVERSED);
  });
  describe("HAPPY PATHs", () => {
    it("should return an array with the appended array", async () => {
      const response = await reverseCommand.run(WORD);
      expect(response).toEqual(RESPONSE_REVERSED);
    });
  });
});
