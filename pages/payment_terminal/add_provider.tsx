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
  const [valueInputs, setValueInputs] = useState({
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
      valueInputs.name,
      valueInputs.urlLogo
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
    setValueInputs({
      urlLogo: valueInputs.urlLogo,
      name: value,
    });
  };

  const handleOnChangeLogoURL = (value: string) => {
    setValueInputs({
      name: valueInputs.name,
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
                value={valueInputs.name}
                name={"nameProvider"}
                setValue={handleOnChangeName}
              />
              <Input
                required={true}
                label={"Введите ссылку на логотип"}
                value={valueInputs.urlLogo}
                name={"urlLogo"}
                setValue={handleOnChangeLogoURL}
              />
              <ButtonUI
                text="Создать"
                onClick={handleClick}
                disabled={!(valueInputs.name && valueInputs.urlLogo) || isSend}
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
