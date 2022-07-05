import Layout from "../../components/Layout/Layout";
import ProviderBackLink from "../../components/Providers/ProviderBackLink";

import { Container, Wrapper } from "../../components/Providers/Providers.style";
import { FormWrapper } from "../../components/Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import ButtonUI from "../../components/ButtonUI";
import Input from "../../components/Inputs/Input";
import { PageWrapper } from "../../components/PageWrapper.style";

const AddProvider = () => {
  return (
    <Layout>
      <PageWrapper>
        <Wrapper height="50%">
          <ProviderBackLink />
          <Container>
              <h2>Добавить провайдера</h2>

            <FormWrapper className="form">
              <Input required={true} label={"Введите название провайдера"} />
              <Input required={true} label={"Введите ссылку на логотип"} />
              <ButtonUI text="Создать" />
            </FormWrapper>
          </Container>
        </Wrapper>
      </PageWrapper>
    </Layout>
  );
};

export default AddProvider;
