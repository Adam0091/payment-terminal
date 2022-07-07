import { ProviderWrapper } from "./ProviderItem.style";
import { ProviderLogo } from "../ProviderLogo/ProviderLogo";

export const ProviderItem = ({
  name,
  logo,
}: {
  name: string;
  logo: string;
}) => {
  return (
    <ProviderWrapper key={name}>
      <ProviderLogo src={logo} alt={name} />
      <h3>{name}</h3>
    </ProviderWrapper>
  );
};
