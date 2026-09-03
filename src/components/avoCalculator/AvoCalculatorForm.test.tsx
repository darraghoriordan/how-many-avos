import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DEFAULT_PARAMETERS, type CalculatorParameters } from "../../calculators/calculator";
import AvoCalculatorForm from "./AvoCalculatorForm";

function StatefulForm() {
  const [values, setValues] = useState<CalculatorParameters>(DEFAULT_PARAMETERS);
  return <AvoCalculatorForm values={values} onChange={setValues} />;
}

describe("AvoCalculatorForm", () => {
  it("clamps negative savings and deposit percentages over 100", () => {
    render(<StatefulForm />);

    const savings = screen.getByLabelText("Regular weekly savings");
    const deposit = screen.getByLabelText("Deposit required");
    fireEvent.change(savings, { target: { value: "-10" } });
    fireEvent.change(deposit, { target: { value: "150" } });

    expect(savings).toHaveValue(0);
    expect(deposit).toHaveValue(100);
  });
});
