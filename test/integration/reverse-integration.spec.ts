import request from "supertest";

import app from "../../src/app";
import { RESPONSE_REVERSED, WORD } from "../mocks/reverse-endpoint-responses";

describe("GET /api/immfly/reverse/:word", () => {
  describe("HAPPY PATHs", () => {
    it("should return 200 OK and an string with the word reversed and vowels in uppercase", () => {
      return request(app)
        .get(`/api/immfly/reverse/${WORD}`)
        .expect(200, RESPONSE_REVERSED);
    });
  });
  describe("UNHAPPY PATHs", () => {
    it("should return 404 ERROR if no word param", () => {
      return request(app).get("/api/immfly/reverse/").expect(404);
    });
  });
});
