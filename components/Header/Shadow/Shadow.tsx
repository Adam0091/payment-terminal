import { activeType } from "../../../type";
import { PageShadow } from "./Shadow.style";

export const Shadow = ({ isActive, setIsActive }: activeType) => {
  return (
    <PageShadow isActive={isActive} onClick={() => setIsActive(!isActive)} />
  );
};
