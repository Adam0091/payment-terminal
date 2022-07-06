import { NextPage } from "next";

import Layout from "../../components/Layout";
import ProvidersList from "../../components/Providers/ProvidersList";

import { PageWrapper } from "../../components/PageWrapper.style";
import { providerType } from "../../type";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/providers`);
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }

  return { props: { providers: data } };
};

type ProviderProps = { providers: providerType[] };

const PaymentTerminal: NextPage<ProviderProps> = ({ providers }) => {
  return (
    <Layout>
      <PageWrapper>
        <ProvidersList providers={providers} />
      </PageWrapper>
    </Layout>
  );
};

export default PaymentTerminal;
