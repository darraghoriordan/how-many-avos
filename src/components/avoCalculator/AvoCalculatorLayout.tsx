import { useState } from "react";
import { calculateResult, DEFAULT_PARAMETERS, type CalculatorParameters } from "../../calculators/calculator";
import AvoCalculatorForm from "./AvoCalculatorForm";
import AvoCalculatorResult from "./AvoCalculatorResult";

export default function AvoCalculatorLayout() {
  const [parameters, setParameters] = useState<CalculatorParameters>(DEFAULT_PARAMETERS);
  const result = calculateResult(parameters);

  return (
    <section className="calculator" id="calculator" aria-labelledby="calculator-heading">
      <div className="section-heading calculator__heading">
        <h2 id="calculator-heading">Ring up your order</h2>
      </div>
      <div className="calculator__grid">
        <AvoCalculatorForm values={parameters} onChange={setParameters} />
        <AvoCalculatorResult result={result} giftFromParents={parameters.giftFromParents} />
      </div>
    </section>
  );
}
