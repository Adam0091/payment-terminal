import { PageShadow } from "./Shadow.style";

type activeType = {
  isActive: boolean;
  setIsActive: Function;
};

export const Shadow = ({ isActive, setIsActive }: activeType) => {
  return (
    <PageShadow isActive={isActive} onClick={() => setIsActive(!isActive)} />
  );
};
