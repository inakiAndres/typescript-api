import nock from "nock";
import request from "supertest";

import app from "../../src/app";
import {
  ERROR_ORDER,
  RESPONSE_FILTER,
  RESPONSE_FILTER_ORDER_ASC,
  RESPONSE_FILTER_ORDER_DESC,
  RESPONSE_THIRD_PARTY,
  RESPONSE_WITHOUT_FILTERS,
} from "../mocks/third-party-endpoint-responses";

beforeEach(() => {
  nock("https://api.jsonbin.io")
    .get("/b/5f69afbe65b18913fc510ce8")
    .reply(200, RESPONSE_THIRD_PARTY);
});
describe("GET /api/immfly/countries", () => {
  describe("HAPPY PATHs", () => {
    it("should return 200 OK and an Array with all the data", () => {
      return request(app)
        .get("/api/immfly/countries")
        .expect(200, RESPONSE_WITHOUT_FILTERS);
    });

    it("should return 200 OK and an Array with all the countries containing AND", () => {
      return request(app)
        .get("/api/immfly/countries?filter=and")
        .expect(200, RESPONSE_FILTER);
    });
    it("should return 200 OK and an Array with all the countries containing AND in order ASC", () => {
      return request(app)
        .get("/api/immfly/countries?filter=and&order=asc")
        .expect(200, RESPONSE_FILTER_ORDER_ASC);
    });
    it("should return 200 OK and an Array with all the countries containing AND in order DESC", () => {
      return request(app)
        .get("/api/immfly/countries?filter=and&order=desc")
        .expect(200, RESPONSE_FILTER_ORDER_DESC);
    });
  });
  describe("UNHAPPY PATHs", () => {
    it("should return 400 ERROR if order is not asc or desc", () => {
      return request(app)
        .get("/api/immfly/countries?filter=and&order=zzz")
        .expect(400, ERROR_ORDER);
    });
  });
});
