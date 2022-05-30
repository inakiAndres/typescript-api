"use strict";

import { CountryType } from "../types/country-type";

const TTL: string = process.env.TTL || "3600";

const generateKey = (tag: string) => `immfly-no-ttl:${tag}`;

const calculateExpirationDate = (ttlInSeconds: string) =>
  new Date(Date.now() + 1000 * Number(ttlInSeconds));

class ImmflyInMemoryRepository {
  #redis: any;
  constructor(redis: any) {
    this.#redis = redis;
  }

  addCountriesContent(content: CountryType[]) {
    const key = generateKey("countries");
    const expirationDate = calculateExpirationDate(TTL);
    const cachedData = { content, expirationDate };

    return this.#redis.store(key, cachedData);
  }

  async getCountriesContent() {
    const key = generateKey("countries");
    console.log("getCountriesContent", key);
    const cachedData = await this.#redis.get(key);
    console.log("getCountriesContent2", key);
    if (cachedData && cachedData.expirationDate) {
      cachedData.expirationDate = new Date(cachedData.expirationDate);
    }
    return cachedData;
  }
}

export default ImmflyInMemoryRepository;
