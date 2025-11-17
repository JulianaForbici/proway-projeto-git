const { isOpenNow } = require("../src/core/openingHours");

describe("openingHours core", () => {
  test("deve estar fechado de madrugada (ex: 03:00 segunda)", () => {
    const date = new Date("2025-01-06T03:00:00"); // segunda
    expect(isOpenNow(date)).toBe(false);
  });

  test("deve estar aberto em horário comercial (ex: 10:00 segunda)", () => {
    const date = new Date("2025-01-06T10:00:00"); // segunda
    expect(isOpenNow(date)).toBe(true);
  });
});