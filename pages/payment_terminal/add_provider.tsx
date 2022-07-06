import Layout from "../../components/Layout/Layout";
import ProviderBackLink from "../../components/Providers/ProviderBackLink";

import { Container, Wrapper } from "../../components/Providers/Providers.style";
import { FormWrapper } from "../../components/Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import ButtonUI from "../../components/UI-Kit/ButtonUI";
import Input from "../../components/UI-Kit/Inputs/Input";
import { PageWrapper } from "../../components/PageWrapper.style";
import { useState } from "react";
import { Alert, styled } from "@mui/material";
import { useRouter } from "next/router";

export const AlertFixed = styled(Alert)({
  position: "fixed",
  top: "90%",
  right: "0",
  margin: "0 30px 0 0",
});

const AddProvider = () => {
  const [nameProvider, setNameProvider] = useState("");
  const [urlLogoProvider, setUrlLogoProvider] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    const response = await fetch(`${process.env.API_HOST}/providers`);
    const dataGet = await response.json();

    const dataPost = await fetch(`${process.env.API_HOST}/providers`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: dataGet.length,
        name: nameProvider,
        logo: urlLogoProvider,
      }),
    });
    const res = Boolean(await dataPost.json);

    setIsSend(true);
    res ? setError(false) : setError(true);
    if (!error) {
      setTimeout(() => router.back(), 1500);
    }
  };

  return (
    <Layout>
      <PageWrapper>
        <Wrapper height="50%">
          <ProviderBackLink />
          <Container>
            <h2>Добавить провайдера</h2>

            <FormWrapper>
              <Input
                required={true}
                label={"Введите название провайдера"}
                value={nameProvider}
                name={"nameProvider"}
                onChange={setNameProvider}
              />
              <Input
                required={true}
                label={"Введите ссылку на логотип"}
                value={urlLogoProvider}
                name={"urlLogo"}
                onChange={setUrlLogoProvider}
              />
              <ButtonUI
                text="Создать"
                onClick={handleClick}
                disabled={!(nameProvider && urlLogoProvider)}
              />
            </FormWrapper>
          </Container>
        </Wrapper>
        {isSend && (
          <AlertFixed severity={error ? "error" : "success"}>
            {error ? "Провайдер не был создан" : "Провайдер создан"}
          </AlertFixed>
        )}
      </PageWrapper>
    </Layout>
  );
};

export default AddProvider;
