import { useState } from "react";
import * as React from "react";
import InputMask from "react-input-mask";

import { inputType } from "../../../../type";

import {
  InputContainer,
  InputWrapper,
} from "../../../Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import { CssTextField } from "./InputTel.style";

export const InputTel = ({ value, onChange, setError }: inputType) => {
  const [telDirty, setTelDirty] = useState(false);
  const [telErrorMessage, setTelErrorMessage] = useState(
    "Телефон не может быть пустым"
  );

  const blurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = event.target.name;
    if (targetName === "tel") setTelDirty(true);
  };
  const telHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value.includes(" ")) {
      setError(false);
      setTelErrorMessage("");
    } else {
      setError(true);
      setTelErrorMessage("Телефон не может быть пустым");
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
            error={Boolean(telErrorMessage) && telDirty}
            fullWidth
            label="Telephon"
            variant="outlined"
          />
        </InputMask>
      </InputContainer>
      {telDirty && telErrorMessage && (
        <div style={{ color: "red" }}>{telErrorMessage}</div>
      )}
    </InputWrapper>
  );
};
