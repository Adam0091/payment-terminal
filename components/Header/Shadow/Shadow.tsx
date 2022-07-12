import { PageShadow } from "./Shadow.style";

type activeType = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
};

export const Shadow = ({ isActive, setIsActive }: activeType) => {
  return (
    <PageShadow isActive={isActive} onClick={() => setIsActive(!isActive)} />
  );
};
