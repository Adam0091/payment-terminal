import Provider from "../Provider";
import {
  ChooseProviderContainer,
  ChooseProviderWrapper,
  TitleStyle,
} from "./ChooseProvider.style";
import AddProvider from "./../AddProvider/AddProvider";

const ChooseProvider = () => {
  const providers = [
    {
      id: 1,
      name: "MTC",
      logo: "/providers/mts.png",
      path: "/providers/mts",
    },
    {
      id: 2,
      name: "Билайн",
      logo: "/providers/beeline.png",
      path: "/providers/beeline",
    },
    {
      id: 3,
      name: "Мегафон",
      logo: "/providers/megafon.png",
      path: "/providers/megafon",
    },
  ];

  return (
    <ChooseProviderWrapper>
      <TitleStyle>Choose your provider</TitleStyle>
      <ChooseProviderContainer>
        {providers.map((provider) => (
          <Provider key={provider.id} {...provider} />
        ))}
        <AddProvider />
      </ChooseProviderContainer>
    </ChooseProviderWrapper>
  );
};

export default ChooseProvider;
