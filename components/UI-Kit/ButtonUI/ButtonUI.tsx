import { MouseEventHandler } from "react";
import { ColorButton } from "./ButtonUI.style";

const ButtonUI = ({
  text,
  onClick,
  disabled,
}: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}) => {
  return (
    <ColorButton variant="outlined" onClick={onClick} disabled={disabled}>
      {text}
    </ColorButton>
  );
};

export default ButtonUI;
