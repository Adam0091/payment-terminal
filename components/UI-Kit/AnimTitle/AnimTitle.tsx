import { TitleWrapper } from "./AnimTitle.style";

const AnimTitle = ({ text }: { text: string }) => {
  return (
    <TitleWrapper>
      <h2>{text}</h2>
    </TitleWrapper>
  );
};

export default AnimTitle;
