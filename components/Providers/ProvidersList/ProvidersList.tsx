import Provider from "../ProviderItem";
import {
  ProvidersListLi,
  ProvidersListUl,
  TitleStyle,
} from "./ProvidersList.style";
import AddProvider from "../AddProvider/AddProvider";
import { providerType } from "../../../type";
import { Container, Wrapper } from "../Providers.style";
import { useRouter } from "next/router";

const ProvidersList = ({ providers }: { providers: Array<providerType> }) => {
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
                <Provider {...provider} />
              </ProvidersListLi>
            ))}

          <AddProvider />
        </ProvidersListUl>
      </Container>
    </Wrapper>
  );
};

export default ProvidersList;
