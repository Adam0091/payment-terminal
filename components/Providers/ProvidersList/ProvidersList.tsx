import { useRouter } from "next/router";
import { routesHeader } from "../../../routes/route-path";

import { AddProvider } from "../AddProvider/AddProvider";
import { ProviderItem } from "./../ProviderItem/ProviderItem";

import { providerType } from "../../../type";

import { Container, Wrapper } from "../Providers.style";
import {
  ProvidersListLi,
  ProvidersListUl,
  TitleStyle,
} from "./ProvidersList.style";

type TProps = {
  providers: Array<providerType>;
};

export const ProvidersList = ({ providers }: TProps) => {
  const router = useRouter();

  return (
    <Wrapper>
      <TitleStyle>Choose your provider</TitleStyle>
      <Container>
        <ProvidersListUl>
          {providers &&
            providers.map((provider, id) => (
              <ProvidersListLi
                key={provider.id}
                onClick={() => router.push(`${routesHeader[1].path}/${id}`)}
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
