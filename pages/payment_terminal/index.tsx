import { NextPage } from "next";

import Layout from "../../components/Layout";
import ProvidersList from "../../components/Providers/ProvidersList";

import { PageWrapper } from "../../components/PageWrapper.style";
import clientPromise from "../../lib/mongodb";
import { providerType } from "../../type";

export const getServerSideProps = async () => {
  const client = await clientPromise;
  let data = await client.db().collection("providers").find({}).toArray();
  data = JSON.parse(JSON.stringify(data));

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
