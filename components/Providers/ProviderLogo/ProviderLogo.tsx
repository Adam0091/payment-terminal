import { LogoStyle, LogoWrapper } from "./ProviderLogo.style";

type logoProps = {
  src: string;
  alt: string;
  isAnimated?: boolean;
};

const Logo = ({ src, alt, isAnimated }: logoProps) => (
  <LogoWrapper isAnimated={isAnimated}>
    <LogoStyle src={src} alt={alt} />
  </LogoWrapper>
);

export default Logo;
