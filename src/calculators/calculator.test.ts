import { describe, expect, it } from "vitest";
import { calculateResult, DEFAULT_PARAMETERS } from "./calculator";

describe("calculateResult", () => {
  it("calculates the default deposit and savings", () => {
    const result = calculateResult(DEFAULT_PARAMETERS);

    expect(result.deposit).toBe(200_000);
    expect(result.weeklySavings).toBe(611);
    expect(result.yearsToDeposit).toBeCloseTo(6.294, 2);
    expect(result.monthlyMortgagePayment).toBeCloseTo(3_819.32, 2);
  });

  it("handles a fully gifted deposit", () => {
    const result = calculateResult({ ...DEFAULT_PARAMETERS, giftFromParents: 200_000 });
    expect(result.yearsToDeposit).toBe(0);
  });

  it("does not claim a finite saving time when weekly savings are zero", () => {
    const result = calculateResult({
      ...DEFAULT_PARAMETERS,
      personalSavingsPerWeek: 0,
      lattesPerWeek: 0,
      avoBreakfastsPerWeek: 0,
    });
    expect(result.yearsToDeposit).toBeNull();
  });
});
