import { useState } from "react";
import { Alert, styled } from "@mui/material";
import { useRouter } from "next/router";

import { Layout } from "../../components/Layout/Layout";
import { ProviderBackLink } from "../../components/Providers/ProviderBackLink";
import { LoaderUI } from "../../components/UI-Kit/LoaderUI";
import { ButtonUI } from "../../components/UI-Kit/ButtonUI";
import { Input } from "../../components/UI-Kit/Inputs/Input";

import { Container, Wrapper } from "../../components/Providers/Providers.style";
import { FormWrapper } from "../../components/Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import { PageWrapper } from "../../components/PageWrapper.style";

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
  const [errorSend, setErrorSend] = useState<boolean | null>(null);
  const router = useRouter();

  const handleClick = async () => {
    const api_host = process.env.API_HOST
      ? process.env.API_HOST
      : "http://localhost:3000";

    setIsSend(true);

    const response = await fetch(`${api_host}/api/providers`);
    const dataGet = await response.json();

    const dataPost = await fetch(`${api_host}/api/providers`, {
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

    res ? setErrorSend(false) : setErrorSend(true);
    if (!errorSend) setTimeout(() => router.back(), 1500);
    else {
      setTimeout(() => {
        setIsSend(false);
        setErrorSend(null);
      }, 1500);
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
                disabled={!(nameProvider && urlLogoProvider) || isSend}
              />
            </FormWrapper>
          </Container>
        </Wrapper>
        {isSend &&
          (errorSend !== null ? (
            <AlertFixed severity={errorSend ? "error" : "success"}>
              {errorSend ? "Провайдер не был создан" : "Провайдер создан"}
            </AlertFixed>
          ) : (
            <LoaderUI />
          ))}
      </PageWrapper>
    </Layout>
  );
};

export default AddProvider;
