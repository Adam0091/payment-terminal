import { useState } from "react";
import * as React from "react";
import InputMask from "react-input-mask";

import { TValueInputs } from "../../../../type";

import {
  InputContainer,
  InputWrapper,
} from "../../../Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import { CssTextField } from "./InputTel.style";

type TProps = {
  valueInputs: TValueInputs;
  setValueInputs: (value: TValueInputs) => void;
  error: { value: boolean; errorMessage: string };
  setError: (value: boolean, errorMessage: string) => void;
};

export const InputTel = ({
  valueInputs,
  setValueInputs,
  error,
  setError,
}: TProps) => {
  const [telDirty, setTelDirty] = useState(false);

  const blurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = event.target.name;
    if (targetName === "tel") setTelDirty(true);
  };

  const telHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emptyLength = 4; // количество символов при пустом input
    const fullLength = 17; // количесвто символов при заполненом input
    const value = event.target.value;
    console.log(value.length);

    if (emptyLength === value.length) {
      setError(true, "Телефон не может быть пустым");
    } else if (value.length < fullLength) {
      setError(true, "Неправильно ввели номер");
    } else {
      setError(false, "");
    }

    setValueInputs({
      tel: value,
      sum: valueInputs.sum,
    });
  };

  return (
    <InputWrapper>
      <InputContainer>
        <InputMask
          alwaysShowMask={true}
          maskPlaceholder=""
          name="tel"
          mask="+7(\999)-999-99-99"
          value={valueInputs.tel}
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
