import {
  InputContainer,
  InputWrapper,
} from "../../../Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import { CssTextField } from "./Input.style";
import { useState } from "react";

type TProps = {
  label: string;
  required: boolean;
  value: string;
  name: string;
  onChange: any;
};

export const Input = ({ label, required, value, name, onChange }: TProps) => {
  const [inputDirty, setInputDirty] = useState(false);

  const blurHandler = (targetName: string) => {
    if (targetName === name) setInputDirty(true);
  };

  const isError = !value && inputDirty && required;

  return (
    <InputWrapper>
      <InputContainer>
        <CssTextField
          required={required}
          error={isError}
          fullWidth
          id="outlined-basic"
          label={label}
          variant="outlined"
          name={name}
          value={value}
          InputLabelProps={{ style: { fontSize: 12 } }}
          onBlur={(e) => blurHandler(e.target.name)}
          onChange={(e) => onChange(e.target.value)}
        />
      </InputContainer>
    </InputWrapper>
  );
};
