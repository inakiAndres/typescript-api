import request from "supertest";

import app from "../../src/app";
import {
  ERROR_END,
  ERROR_START,
  RESPONSE_APPEND,
} from "../mocks/append-endpoint-responses";

describe("GET /api/immfly/append?start=hello&end=bye", () => {
  describe("HAPPY PATHs", () => {
    it("should return 200 OK and an string with the word reversed and vowels in uppercase", () => {
      return request(app)
        .get(`/api/immfly/append?start=hello&end=bye`)
        .expect(200, RESPONSE_APPEND);
    });
  });
  describe("UNHAPPY PATHs", () => {
    it("should return 400 ERROR if no start param", () => {
      return request(app)
        .get("/api/immfly/append?end=bye")
        .expect(400, ERROR_START);
    });
    it("should return 400 ERROR if no end param", () => {
      return request(app)
        .get("/api/immfly/append?start=hello")
        .expect(400, ERROR_END);
    });
  });
});
