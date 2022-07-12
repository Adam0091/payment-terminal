import { MouseEventHandler } from "react";
import { ColorButton } from "./ButtonUI.style";

type TProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export const ButtonUI = ({ text, onClick, disabled }: TProps) => {
  return (
    <ColorButton variant="outlined" onClick={onClick} disabled={disabled}>
      {text}
    </ColorButton>
  );
};
