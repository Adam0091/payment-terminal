import { useRouter } from "next/router";

import { AddProvider } from "../AddProvider/AddProvider";
import { ProviderItem } from "./../ProviderItem/ProviderItem";

import { providerType } from "../../../type";

import { Container, Wrapper } from "../Providers.style";
import {
  ProvidersListLi,
  ProvidersListUl,
  TitleStyle,
} from "./ProvidersList.style";

export const ProvidersList = ({
  providers,
}: {
  providers: Array<providerType>;
}) => {
  const router = useRouter();

  return (
    <Wrapper>
      <TitleStyle>Choose your provider</TitleStyle>
      <Container>
        <ProvidersListUl>
          {providers &&
            providers.map((provider: providerType, id) => (
              <ProvidersListLi
                key={provider.id}
                onClick={() => router.push(`/payment_terminal/${id}`)}
              >
                <ProviderItem {...provider} />
              </ProvidersListLi>
            ))}

          <AddProvider />
        </ProvidersListUl>
      </Container>
    </Wrapper>
  );
};
