import { useRouter } from "next/router";

import { ProviderBackLink } from "../ProviderBackLink";
import { ProviderLogo } from "../ProviderLogo";
import { InputTel } from "../../UI-Kit/Inputs/InputTel";
import { InputSum } from "../../UI-Kit/Inputs/InputSum";
import { ButtonUI } from "../../UI-Kit/ButtonUI";
import { LoaderUI } from "../../UI-Kit/LoaderUI";

import { providerType, TValueInputs } from "../../../type";
import { postPayment } from "../../../utils/network";

import { Container, Wrapper } from "../Providers.style";
import { useState } from "react";
import {
  AlertFixed,
  FormWrapper,
  ProviderLogoWrapper,
} from "./ProviderPaymentForm.style";

type TProps = {
  provider: providerType;
};

export const ProviderPaymentForm = ({ provider }: TProps) => {
  const router = useRouter();
  const [isSendReq, setIsSendReq] = useState(false);
  const [isErrorAlert, setIsErrorAlert] = useState<boolean | null>(null);
  const [inputValues, setInputValues] = useState<TValueInputs>({
    tel: "",
    sum: "0",
  });

  const [errorTel, setErrorTel] = useState({
    value: true,
    errorMessage: "Телефон не может быть пустым",
  });
  const [errorSum, setErrorSum] = useState({
    value: true,
    errorMessage: "Введите сумму для перевода",
  });

  const { name, logo } = provider || {};

  if (!provider) return <h1>Провайдер не известен</h1>;

  const handleClick = async () => {
    setIsSendReq(true);
    const dataPostRes = await postPayment(inputValues);

    if (dataPostRes.ok) {
      setIsErrorAlert(false);
      setTimeout(() => router.back(), 1000);
    } else {
      setIsErrorAlert(true);
      setTimeout(() => {
        setIsSendReq(false);
        setIsErrorAlert(null);
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
            error={errorTel}
            setError={(value: boolean, errorMessage: string) =>
              setErrorTel({
                value,
                errorMessage,
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
            error={errorSum}
            setError={(value: boolean, errorMessage: string) =>
              setErrorSum({
                value,
                errorMessage,
              })
            }
          />
          <ButtonUI
            text="Оплатить"
            disabled={errorTel.value || errorSum.value || isSendReq}
            onClick={handleClick}
          />
        </FormWrapper>
      </Container>
      {isSendReq &&
        (isErrorAlert !== null ? (
          <AlertFixed severity={isErrorAlert ? "error" : "success"}>
            {isErrorAlert ? "Оплата не прошла" : "Оплата прошла успешна"}
          </AlertFixed>
        ) : (
          <LoaderUI />
        ))}
    </Wrapper>
  );
};
