import { NextPage } from "next";

import Layout from "../../components/Layout";
import ProvidersList from "../../components/Providers/ProvidersList";

import { PageWrapper } from "../../components/PageWrapper.style";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/providers");
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }

  return { props: { providers: data } };
};

const PaymentTerminal: NextPage = ({ providers }) => {
  return (
    <Layout>
      <PageWrapper>
        <ProvidersList providers={providers} />
      </PageWrapper>
    </Layout>
  );
};

export default PaymentTerminal;
