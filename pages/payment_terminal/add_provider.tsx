import { useState } from "react";
import { useRouter } from "next/router";

import { addNewProviders, getProviders } from "../../utils/network";

import { Layout } from "../../components/Layout";
import { ProviderBackLink } from "../../components/Providers/ProviderBackLink";
import { LoaderUI } from "../../components/UI-Kit/LoaderUI";
import { ButtonUI } from "../../components/UI-Kit/ButtonUI";
import { Input } from "../../components/UI-Kit/Inputs/Input";

import { Container, Wrapper } from "../../components/Providers/Providers.style";
import {
  AlertFixed,
  FormWrapper,
} from "../../components/Providers/ProviderPaymentForm/ProviderPaymentForm.style";
import { PageWrapper } from "../../components/PageWrapper.style";

const AddProvider = () => {
  const router = useRouter();
  const [inputValues, setInputValues] = useState({
    name: "",
    urlLogo: "",
  });
  const [isSend, setIsSend] = useState(false);
  const [errorSend, setErrorSend] = useState<boolean | null>(null);

  const handleClick = async () => {
    setIsSend(true);

    const providers = await getProviders();
    const dataPost = await addNewProviders(
      providers.length,
      inputValues.name,
      inputValues.urlLogo
    );

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

  const handleOnChangeName = (value: string) => {
    setInputValues({
      ...inputValues,
      name: value,
    });
  };

  const handleOnChangeLogoURL = (value: string) => {
    setInputValues({
      ...inputValues,
      urlLogo: value,
    });
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
                value={inputValues.name}
                name={"nameProvider"}
                onChange={handleOnChangeName}
              />
              <Input
                required={true}
                label={"Введите ссылку на логотип"}
                value={inputValues.urlLogo}
                name={"urlLogo"}
                onChange={handleOnChangeLogoURL}
              />
              <ButtonUI
                text="Создать"
                onClick={handleClick}
                disabled={!(inputValues.name && inputValues.urlLogo) || isSend}
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
