export type CalculatorParameters = {
  housePrice: number;
  percentDepositRequired: number;
  giftFromParents: number;
  lattesPerWeek: number;
  avoBreakfastsPerWeek: number;
  personalSavingsPerWeek: number;
};

export type CalculatorResult = {
  deposit: number;
  weeklySavings: number;
  latteSavings: number;
  avoSavings: number;
  yearsToDeposit: number | null;
  monthlyMortgagePayment: number;
  totalMortgageCost: number;
};

export const DEFAULT_PARAMETERS: CalculatorParameters = {
  housePrice: 1_000_000,
  percentDepositRequired: 20,
  giftFromParents: 0,
  lattesPerWeek: 10,
  avoBreakfastsPerWeek: 3,
  personalSavingsPerWeek: 500,
};

const LATTE_PRICE = 4.5;
const AVO_BREAKFAST_PRICE = 22;
const MORTGAGE_YEARS = 30;
const YEARLY_MORTGAGE_RATE = 0.04;

export function calculateResult(parameters: CalculatorParameters): CalculatorResult {
  const deposit = parameters.housePrice * (parameters.percentDepositRequired / 100);
  const latteSavings = parameters.lattesPerWeek * LATTE_PRICE;
  const avoSavings = parameters.avoBreakfastsPerWeek * AVO_BREAKFAST_PRICE;
  const weeklySavings = parameters.personalSavingsPerWeek + latteSavings + avoSavings;
  const remainingDeposit = Math.max(0, deposit - parameters.giftFromParents);
  const yearsToDeposit = weeklySavings > 0 ? remainingDeposit / weeklySavings / 52 : null;

  const principal = Math.max(0, parameters.housePrice - deposit);
  const paymentCount = MORTGAGE_YEARS * 12;
  const monthlyRate = YEARLY_MORTGAGE_RATE / 12;
  const monthlyMortgagePayment =
    principal === 0
      ? 0
      : (principal * monthlyRate * (1 + monthlyRate) ** paymentCount) /
        ((1 + monthlyRate) ** paymentCount - 1);

  return {
    deposit,
    weeklySavings,
    latteSavings,
    avoSavings,
    yearsToDeposit,
    monthlyMortgagePayment,
    totalMortgageCost: monthlyMortgagePayment * paymentCount,
  };
}
