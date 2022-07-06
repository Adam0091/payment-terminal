import { activeType } from "../../../type";
import { PageShadow } from "./Shadow.style";

const Shadow = ({ isActive, setIsActive }: activeType) => {
  return (
    <PageShadow isActive={isActive} onClick={() => setIsActive(!isActive)} />
  );
};

export default Shadow;
