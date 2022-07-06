import {
  InputContainer,
  InputWrapper,
} from "../../../Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import { CssTextField } from "./Input.style";
import { useState } from "react";

const Input = ({
  label,
  required,
  value,
  name,
  onChange,
}: {
  label: string;
  required: boolean;
  value: any;
  name: string;
  onChange: any;
}) => {
  const [inputDirty, setInputDirty] = useState(false);

  const blurHandler = (event: Event) => {
    const targetName = (event.target as HTMLInputElement).name;
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
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => onChange(e.target.value)}
        />
      </InputContainer>
    </InputWrapper>
  );
};

export default Input;
