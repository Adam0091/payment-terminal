import Provider from "../ProviderItem";
import {
  ProvidersListA,
  ProvidersListLi,
  ProvidersListUl,
  TitleStyle,
} from "./ProvidersList.style";
import AddProvider from "../AddProvider/AddProvider";
import Link from "next/link";
import { providerType } from "../../../type";
import { Container, Wrapper } from "../Providers.style";

const ProvidersList = ({ providers }: { providers: Array<providerType> }) => {
  return (
    <Wrapper>
      <TitleStyle>Choose your provider</TitleStyle>
      <Container>
        <ProvidersListUl>
          {providers &&
            providers.map((provider: providerType) => (
              <ProvidersListLi key={provider.id}>
                <Link href={`/payment_terminal/${provider.id}`}>
                  <ProvidersListA>
                    <Provider {...provider} />
                  </ProvidersListA>
                </Link>
              </ProvidersListLi>
            ))}

          <AddProvider />
        </ProvidersListUl>
      </Container>
    </Wrapper>
  );
};

export default ProvidersList;
