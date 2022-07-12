import { useState } from "react";
import * as React from "react";
import InputMask from "react-input-mask";

import {
  InputContainer,
  InputWrapper,
} from "../../../Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import { CssTextField } from "./InputTel.style";

type TProps = {
  value: string;
  onChange: (value: string) => void;
  error: { value: boolean; errorMessage: string };
  setError: (value: boolean, errorMessage: string) => void;
};

export const InputTel = ({ value, onChange, error, setError }: TProps) => {
  const [telDirty, setTelDirty] = useState(false);

  const blurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = event.target.name;
    if (targetName === "tel") setTelDirty(true);
  };

  const telHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value.includes(" ")) {
      setError(false, "");
    } else {
      setError(true, "Телефон не может быть пустым");
    }
    onChange(value);
  };

  return (
    <InputWrapper>
      <InputContainer>
        <InputMask
          alwaysShowMask={true}
          maskPlaceholder=" "
          name="tel"
          mask="+7(\999)-999-99-99"
          value={value}
          onChange={(e) => telHandler(e)}
          onBlur={(e) => blurHandler(e)}
        >
          <CssTextField
            type="tel"
            required
            error={error.value && telDirty}
            fullWidth
            label="Telephon"
            variant="outlined"
          />
        </InputMask>
      </InputContainer>
      {telDirty && error.value && (
        <div style={{ color: "red" }}>{error.errorMessage}</div>
      )}
    </InputWrapper>
  );
};
