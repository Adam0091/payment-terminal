import { useRouter } from "next/router";

import ProviderBackLink from "../ProviderBackLink";
import ProviderLogo from "../ProviderLogo";
import InputTel from "../../UI-Kit/Inputs/InputTel";
import InputSum from "../../UI-Kit/Inputs/InputSum";
import ButtonUI from "../../UI-Kit/ButtonUI";
import { Alert, styled } from "@mui/material";

import { providerType } from "../../../type";

import { Container, Wrapper } from "../Providers.style";
import { useState } from "react";
import { FormWrapper, ProviderLogoWrapper } from "./ProviderPaymentForm.style";

export const AlertFixed = styled(Alert)({
  position: "fixed",
  top: "90%",
  left: "85%",
});

const ProviderPaymentForm = ({ provider }: { provider: providerType }) => {
  const router = useRouter();
  const [tel, setTel] = useState("");
  const [sum, setSum] = useState("0");
  const [isSend, setIsSend] = useState(false);
  const [errorTel, setErrorTel] = useState(true);
  const [errorSum, setErrorSum] = useState(true);
  const [errorSend, setErrorSend] = useState(false);
  const { name, logo } = provider || {};

  if (!provider) return <h1>Провайдер не известен</h1>;

  const handleClick = async () => {
    const dataPost = await fetch("http://localhost:3000/api/pay", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tel: tel,
        sum: sum,
      }),
    });

    setIsSend(true);

    dataPost.ok ? setErrorSend(false) : setErrorSend(true);
    if (dataPost.ok) {
      setTimeout(() => router.back(), 1500);
    }
  };

  return (
    <Wrapper height="50%">
      <ProviderBackLink />
      <Container>
        <ProviderLogoWrapper>
          <ProviderLogo src={logo} alt={name} />
          <h3>{name}</h3>
        </ProviderLogoWrapper>

        <FormWrapper className="form">
          <InputTel
            value={tel}
            onChange={(value) => setTel(value)}
            setError={(isError) => setErrorTel(isError)}
          />
          <InputSum
            value={sum}
            onChange={(value) => setSum(value)}
            setError={(isError) => setErrorSum(isError)}
          />
          <ButtonUI
            text="Оплатить"
            disabled={errorTel || errorSum}
            onClick={handleClick}
          />
        </FormWrapper>
      </Container>
      {isSend && (
        <AlertFixed severity={errorSend ? "error" : "success"}>
          {errorSend ? "Оплата не прошла" : "Оплата прошла успешна"}
        </AlertFixed>
      )}
    </Wrapper>
  );
};

export default ProviderPaymentForm;
