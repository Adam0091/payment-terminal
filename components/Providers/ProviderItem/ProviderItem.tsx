import { ProviderWrapper } from "./ProviderItem.style";
import { ProviderLogo } from "../ProviderLogo/ProviderLogo";

type TProps = {
  name: string;
  logo: string;
};

export const ProviderItem = ({ name, logo }: TProps) => {
  return (
    <ProviderWrapper key={name}>
      <ProviderLogo src={logo} alt={name} />
      <h3>{name}</h3>
    </ProviderWrapper>
  );
};
