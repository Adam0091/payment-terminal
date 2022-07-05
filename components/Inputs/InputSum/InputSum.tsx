import { useState } from "react";
import { InputAdornment } from "@mui/material";

import { InputContainer, InputWrapper } from "../../Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import { CssTextField } from "./InputSum.style";


const InputSum = () => {
    const [sum, setSum] = useState("0");
    const [sumDirty, setSumDirty] = useState(false);
    const [sumError, setSumError] = useState("Введите сумму для перевода");

    const blurHandler = (event: Event) => {
        const targetName = (event.target as HTMLInputElement).name;
        if (targetName === "sum") setSumDirty(true);
    };

    const sumHandler = (event: Event) => {
        let value = (event.target as HTMLInputElement).value;
        value = value.replace(/ /g, "");

        if (!isNaN(Number(value)) && Number(value) >= 0) {
            setSumError("");

            if (Number(value) == 0) setSumError("Введите сумму для перевода");
            if (Number(value) > 1000) setSumError("Слишком большая сумма");

            setSum(`${Number(value)}`);
        } else setSum(`${sum}`);
    };

    return (
        <InputWrapper>
            <InputContainer>
                <CssTextField
                    onChange={(e) => sumHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                    value={sum}
                    name="sum"
                    error={Boolean(sumError) && sumDirty}
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
            {sumDirty && sumError && (
                <div style={{ color: "red" }}>{sumError}</div>
            )}
        </InputWrapper>
    );
}

export default InputSum;