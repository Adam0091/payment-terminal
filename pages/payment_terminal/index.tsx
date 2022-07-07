import { NextPage } from "next";
import { clientPromise } from "../../lib/mongodb";

import { Layout } from "../../components/Layout";
import { ProvidersList } from "../../components/Providers/ProvidersList";

import { providerType } from "../../type";

import { PageWrapper } from "../../components/PageWrapper.style";

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
