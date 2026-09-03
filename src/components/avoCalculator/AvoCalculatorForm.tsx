import type { ChangeEvent } from "react";
import type { CalculatorParameters } from "../../calculators/calculator";

type NumberKey = keyof CalculatorParameters;
type AvoCalculatorFormProps = {
  values: CalculatorParameters;
  onChange: (values: CalculatorParameters) => void;
};

type FieldConfig = {
  name: NumberKey;
  label: string;
  prefix?: string;
  suffix?: string;
  min: number;
  max?: number;
  step: number;
};

const groups: { title: string; fields: FieldConfig[] }[] = [
  {
    title: "The house",
    fields: [
      { name: "housePrice", label: "Target house price", prefix: "$", min: 1, step: 10_000 },
      { name: "percentDepositRequired", label: "Deposit required", suffix: "%", min: 0, max: 100, step: 1 },
    ],
  },
  {
    title: "The sacrifice",
    fields: [
      { name: "personalSavingsPerWeek", label: "Regular weekly savings", prefix: "$", min: 0, step: 25 },
      { name: "lattesPerWeek", label: "Lattes skipped each week", min: 0, step: 1 },
      { name: "avoBreakfastsPerWeek", label: "Avo brekkies made at home", min: 0, step: 1 },
    ],
  },
  {
    title: "The helping hand",
    fields: [{ name: "giftFromParents", label: "One-off gift", prefix: "$", min: 0, step: 1_000 }],
  },
];

export default function AvoCalculatorForm({ values, onChange }: AvoCalculatorFormProps) {
  const update = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const key = input.name as NumberKey;
    const minimum = input.min === "" ? 0 : Number(input.min);
    const maximum = input.max === "" ? Number.POSITIVE_INFINITY : Number(input.max);
    const enteredValue = Number.isFinite(input.valueAsNumber) ? input.valueAsNumber : minimum;
    const safeValue = Math.min(maximum, Math.max(minimum, enteredValue));
    onChange({ ...values, [key]: safeValue });
  };

  return (
    <form className="order-form" onSubmit={(event) => event.preventDefault()}>
      {groups.map((group) => (
        <fieldset key={group.title}>
          <legend>{group.title}</legend>
          {group.fields.map((field) => (
            <label className="number-field" key={field.name}>
              <span>{field.label}</span>
              <span className="number-field__control">
                {field.prefix ? <span aria-hidden="true">{field.prefix}</span> : null}
                <input
                  name={field.name}
                  type="number"
                  inputMode="decimal"
                  value={values[field.name]}
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  onChange={update}
                  aria-label={field.label}
                />
                {field.suffix ? <span aria-hidden="true">{field.suffix}</span> : null}
              </span>
            </label>
          ))}
        </fieldset>
      ))}
      <p className="form-note">Results update as you type. Negative values become zero, deposits cap at 100%, and all amounts are in NZD.</p>
    </form>
  );
}
