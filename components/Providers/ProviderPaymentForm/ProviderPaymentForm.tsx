import { useRouter } from "next/router";

import { ProviderBackLink } from "../ProviderBackLink";
import { ProviderLogo } from "../ProviderLogo";
import { InputTel } from "../../UI-Kit/Inputs/InputTel";
import { InputSum } from "../../UI-Kit/Inputs/InputSum";
import { ButtonUI } from "../../UI-Kit/ButtonUI";
import { Alert, styled } from "@mui/material";

import { providerType } from "../../../type";

import { Container, Wrapper } from "../Providers.style";
import { useState } from "react";
import { FormWrapper, ProviderLogoWrapper } from "./ProviderPaymentForm.style";
import { LoaderUI } from "../../UI-Kit/LoaderUI";

export const AlertFixed = styled(Alert)({
  position: "fixed",
  top: "90%",
  right: "0",
  margin: "0 30px 0 0",
});

type TProps = {
  provider: providerType;
};

export const ProviderPaymentForm = ({ provider }: TProps) => {
  const router = useRouter();
  const [inputValues, setInputValues] = useState({
    tel: "",
    sum: "0",
  });
  const [errors, setErrors] = useState({
    tel: true,
    sum: true,
  });
  const [isSend, setIsSend] = useState<{
    message: boolean;
    error: boolean | null;
  }>({
    message: false,
    error: false,
  });
  const { name, logo } = provider || {};

  if (!provider) return <h1>Провайдер не известен</h1>;

  const handleClick = async () => {
    setIsSend({
      ...isSend,
      message: true,
    });
    const api_host = process.env.API_HOST;

    const dataPost = await fetch(`${api_host}/api/pay`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tel: inputValues.tel,
        sum: inputValues.sum,
      }),
    });

    if (dataPost.ok) {
      setIsSend({
        ...isSend,
        error: false,
      });
      setTimeout(() => router.back(), 1000);
    } else {
      setIsSend({
        ...isSend,
        error: true,
      });

      setTimeout(() => {
        setIsSend({
          error: null,
          message: false,
        });
      }, 1000);
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
            value={inputValues.tel}
            onChange={(value: string) =>
              setInputValues({
                ...inputValues,
                tel: value,
              })
            }
            setError={(isError: boolean) =>
              setErrors({
                ...errors,
                tel: isError,
              })
            }
          />
          <InputSum
            value={inputValues.sum}
            onChange={(value: string) =>
              setInputValues({
                ...inputValues,
                sum: value,
              })
            }
            setError={(isError: boolean) =>
              setErrors({
                ...errors,
                sum: isError,
              })
            }
          />
          <ButtonUI
            text="Оплатить"
            disabled={errors.tel || errors.sum || isSend.message}
            onClick={handleClick}
          />
        </FormWrapper>
      </Container>
      {isSend.message &&
        (isSend.error !== null ? (
          <AlertFixed severity={isSend.error ? "error" : "success"}>
            {isSend.error ? "Оплата не прошла" : "Оплата прошла успешна"}
          </AlertFixed>
        ) : (
          <LoaderUI />
        ))}
    </Wrapper>
  );
};
