import { PageShadow } from "./Shadow.style";

const Shadow = ({ isActive, setIsActive }) => {
  return (
    <PageShadow isActive={isActive} onClick={() => setIsActive(!isActive)} />
  );
};

export default Shadow;
