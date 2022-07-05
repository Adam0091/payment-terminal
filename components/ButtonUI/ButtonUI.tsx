import { ColorButton } from "./ButtonUI.style";

const ButtonUI = ({ text, disabled }: { text: string, disabled?: boolean }) => {
    return (
        <ColorButton variant="outlined" disabled={disabled}>{text}</ColorButton>
    );
}

export default ButtonUI;