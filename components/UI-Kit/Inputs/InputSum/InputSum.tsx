import { useState } from "react";
import { InputAdornment } from "@mui/material";

import {
  InputContainer,
  InputWrapper,
} from "../../../Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import { CssTextField } from "./InputSum.style";

type TProps = {
  value: string;
  onChange: (value: string) => void;
  error: { value: boolean; errorMessage: string };
  setError: (value: boolean, errorMessage: string) => void;
};

export const InputSum = ({ value, onChange, error, setError }: TProps) => {
  const [sumDirty, setSumDirty] = useState(false);

  const blurHandler = (targetName: string) => {
    if (targetName === "sum") setSumDirty(true);
  };

  const sumHandler = (targetValue: string) => {
    const valueTarget = targetValue.replace(/ /g, "");

    if (!isNaN(Number(valueTarget)) && Number(valueTarget) >= 0) {
      setError(false, "");

      if (Number(valueTarget) == 0) {
        setError(true, "Введите сумму для перевода");
      }
      if (Number(valueTarget) > 1000) {
        setError(true, "Слишком большая сумма");
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
          error={Boolean(error.errorMessage) && sumDirty}
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
      {sumDirty && error.value && (
        <div style={{ color: "red" }}>{error.errorMessage}</div>
      )}
    </InputWrapper>
  );
};
