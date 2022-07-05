
import ProviderBackLink from "../ProviderBackLink";
import ProviderLogo from "../ProviderLogo";
import InputTel from "../../Inputs/InputTel";
import InputSum from "../../Inputs/InputSum";
import ButtonUI from "../../ButtonUI";

import { providerType } from "../../../type";

import { Container, Wrapper } from "../Providers.style";
import {
  FormWrapper,
  ProviderLogoWrapper,
} from "./ProviderPaymentForm.style";



const ProviderPaymentForm = ({ provider }: { provider: providerType }) => {

  const { name, logo } = provider || {};

  if (!provider) return <h1>Провайдер не известен</h1>;

  return (
    <Wrapper height="50%">
      <ProviderBackLink />
      <Container>
        <ProviderLogoWrapper>
          <ProviderLogo src={logo} alt={name} />
          <h2>{name}</h2>
        </ProviderLogoWrapper>

        <FormWrapper className="form">
          <InputTel />
          <InputSum />
          <ButtonUI text="Оплатить"/>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
};

export default ProviderPaymentForm;
