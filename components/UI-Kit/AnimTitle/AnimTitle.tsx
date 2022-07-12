import { TitleWrapper } from "./AnimTitle.style";

type TProps = { text: string };

export const AnimTitle = ({ text }: TProps) => {
  return (
    <TitleWrapper>
      <h2>{text}</h2>
    </TitleWrapper>
  );
};
