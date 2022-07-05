import { useState } from "react";
import InputMask from "react-input-mask";

import { InputContainer, InputWrapper } from "../../Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import { CssTextField } from "./InputTel.style";

const InputTel = () => {
    const [tel, setTel] = useState("");
    const [telDirty, setTelDirty] = useState(false);
    const [telError, setTelError] = useState("Телефон не может быть пустым");

    const blurHandler = (event: Event) => {
        const targetName = (event.target as HTMLInputElement).name;
        if (targetName === 'tel') setTelDirty(true);
    };
    const telHandler = (event: Event) => {
        const value = (event.target as HTMLInputElement).value;

        if (!value.includes("_")) setTelError("");
        else setTelError("Телефон не может быть пустым");
        setTel(value);
    };

    return (
        <InputWrapper>
            <InputContainer>
                <InputMask
                    alwaysShowMask={true}
                    name="tel"
                    mask="+7(\999)-999-99-99"
                    value={tel}
                    onChange={(e) => telHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                >
                    {(inputProps) => (
                        <CssTextField
                            {...inputProps}
                            required
                            error={Boolean(telError) && telDirty}
                            fullWidth
                            label="Telephon"
                            variant="outlined"
                        />
                    )}
                </InputMask>
            </InputContainer>
            {telDirty && telError && (
                <div style={{ color: "red" }}>{telError}</div>
            )}
        </InputWrapper>
    );
}

export default InputTel;