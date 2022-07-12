import { GetServerSideProps } from "next";

import { clientPromise } from "./../../lib/mongodb";

import { Layout } from "../../components/Layout";
import { ProviderPaymentForm } from "../../components/Providers/ProviderPaymentForm";

import { providerType } from "../../type";

import { PageWrapper } from "../../components/PageWrapper.style";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providerID = context.params?.providerID as string;
  const client = await clientPromise;
  let data = await client.db().collection("providers").find({}).toArray();
  data = JSON.parse(JSON.stringify(data));

  if (!data) {
    return { notFound: true };
  }

  return { props: { provider: data[Number(providerID)] } };
};

const ProviderID = ({ provider }: { provider: providerType }) => {
  return (
    <Layout>
      <PageWrapper>
        <ProviderPaymentForm provider={provider} />
      </PageWrapper>
    </Layout>
  );
};

export default ProviderID;
