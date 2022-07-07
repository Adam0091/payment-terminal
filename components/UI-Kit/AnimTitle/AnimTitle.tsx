import { TitleWrapper } from "./AnimTitle.style";

export const AnimTitle = ({ text }: { text: string }) => {
  return (
    <TitleWrapper>
      <h2>{text}</h2>
    </TitleWrapper>
  );
};
