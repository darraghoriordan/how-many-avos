import { describe, expect, it } from "vitest";
import { annualPercentageToDailyDollarChange, getChangeSoFarToday } from "./useCurrentHousePriceChange";

describe("house price change", () => {
  it("converts the July 2026 annual median change to a negative daily amount", () => {
    expect(annualPercentageToDailyDollarChange(760_000, -0.7)).toBeCloseTo(-14.68, 2);
  });

  it("applies the daily change proportionally from midnight", () => {
    const midday = new Date(2026, 8, 3, 12, 0, 0);
    expect(getChangeSoFarToday(-14.68, midday)).toBeCloseTo(-7.34, 2);
  });
});
