import { ProviderWrapper } from "./ProviderItem.style";
import Logo from "../ProviderLogo/ProviderLogo";

const ProvideItem = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <ProviderWrapper key={name}>
      <Logo src={logo} alt={name} />
      <h3>{name}</h3>
    </ProviderWrapper>
  );
};

export default ProvideItem;
