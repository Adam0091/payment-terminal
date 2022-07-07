import { useState } from "react";
import { InputAdornment } from "@mui/material";

import { inputType } from "../../../../type";
import {
  InputContainer,
  InputWrapper,
} from "../../../Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import { CssTextField } from "./InputSum.style";

export const InputSum = ({ value, onChange, setError }: inputType) => {
  const [sumDirty, setSumDirty] = useState(false);
  const [sumErrorMessage, setSumErrorMessage] = useState(
    "Введите сумму для перевода"
  );

  const blurHandler = (targetName: string) => {
    if (targetName === "sum") setSumDirty(true);
  };

  const sumHandler = (targetValue: string) => {
    const valueTarget = targetValue.replace(/ /g, "");

    if (!isNaN(Number(valueTarget)) && Number(valueTarget) >= 0) {
      setSumErrorMessage("");
      setError(false);

      if (Number(valueTarget) == 0) {
        setError(true);
        setSumErrorMessage("Введите сумму для перевода");
      }
      if (Number(valueTarget) > 1000) {
        setError(true);
        setSumErrorMessage("Слишком большая сумма");
      }

      onChange(`${Number(valueTarget)}`);
    } else onChange(`${value}`);
  };

  return (
    <InputWrapper>
      <InputContainer>
        <CssTextField
          onChange={(event) =>
            sumHandler((event.target as HTMLInputElement).value)
          }
          onBlur={(event) =>
            blurHandler((event.target as HTMLInputElement).name)
          }
          value={value}
          name="sum"
          error={Boolean(sumErrorMessage) && sumDirty}
          required
          fullWidth
          label="Вветите сумму платежа"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rub.</InputAdornment>
            ),
          }}
        />
      </InputContainer>
      {sumDirty && sumErrorMessage && (
        <div style={{ color: "red" }}>{sumErrorMessage}</div>
      )}
    </InputWrapper>
  );
};
