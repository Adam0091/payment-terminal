import { InputContainer, InputWrapper } from "../../Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import { CssTextField } from "./Input.style";

const Input = ({ label, required }: { label: string, required: boolean }) => {
    return (
        <InputWrapper>
            <InputContainer>
                <CssTextField required={required} fullWidth id="outlined-basic" label={label} variant="outlined" />
            </InputContainer>
        </InputWrapper>

    );
}

export default Input;