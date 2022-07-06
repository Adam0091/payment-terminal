import { activeType } from "../../../type";
import { BurgerContainer } from "./Burger.style";

const Burger = ({ isActive, setIsActive }: activeType) => {
  return (
    <BurgerContainer isActive={isActive} onClick={() => setIsActive(!isActive)}>
      <svg
        width="30"
        height="22"
        viewBox="0 0 30 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="21" x2="30" y2="21" stroke="white" strokeWidth="2" />
        <line y1="11" x2="30" y2="11" stroke="white" strokeWidth="2" />
        <line y1="1" x2="30" y2="1" stroke="white" strokeWidth="2" />
      </svg>
    </BurgerContainer>
  );
};

export default Burger;