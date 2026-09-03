import type { CalculatorResult } from "../../calculators/calculator";

type AvoCalculatorResultProps = {
  result: CalculatorResult;
  giftFromParents: number;
};

const currency = new Intl.NumberFormat("en-NZ", {
  style: "currency",
  currency: "NZD",
  maximumFractionDigits: 0,
});

export default function AvoCalculatorResult({ result, giftFromParents }: AvoCalculatorResultProps) {
  return (
    <aside className="receipt" aria-live="polite" aria-label="Your result">
      <div className="receipt__top">
        <span>Order summary</span>
        <span>NZD</span>
      </div>

      <div className="receipt__headline">
        <span>Time to save the deposit</span>
        <strong>{result.yearsToDeposit === null ? "∞" : result.yearsToDeposit.toFixed(1)}</strong>
        <span>{result.yearsToDeposit === 1 ? "year" : "years"}</span>
      </div>

      <dl className="receipt__lines">
        <div><dt>Deposit needed</dt><dd>{currency.format(result.deposit)}</dd></div>
        <div><dt>Your weekly savings</dt><dd>{currency.format(result.weeklySavings)}</dd></div>
        <div><dt>Saved on lattes</dt><dd>{currency.format(result.latteSavings)}/wk</dd></div>
        <div><dt>Saved on avo brekkies</dt><dd>{currency.format(result.avoSavings)}/wk</dd></div>
        {giftFromParents > 0 ? <div><dt>One-off gift</dt><dd>{currency.format(giftFromParents)}</dd></div> : null}
      </dl>

      <div className="receipt__total">
        <span>Monthly mortgage</span>
        <strong>{currency.format(result.monthlyMortgagePayment)}</strong>
      </div>
      <p className="receipt__fineprint">Over 30 years at 4%, the mortgage totals about {currency.format(result.totalMortgageCost)}. This intentionally simple estimate is not financial advice.</p>
    </aside>
  );
}
