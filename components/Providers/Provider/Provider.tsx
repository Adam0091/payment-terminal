import { LogoStyle, LogoWrapper, ProviderWrapper } from "./Provider.style";

const Provide = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <ProviderWrapper key={name}>
      <LogoWrapper>
        <LogoStyle src={logo} alt={name} />
      </LogoWrapper>

      <h2>{name}</h2>
    </ProviderWrapper>
  );
};

export default Provide;
