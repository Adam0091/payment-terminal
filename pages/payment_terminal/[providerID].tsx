import Layout from "../../components/Layout/Layout";
import ProviderPaymentForm from "../../components/Providers/ProviderPaymentForm";
import { PageWrapper } from "../../components/PageWrapper.style";
import { GetStaticPaths, GetStaticProps } from "next";
import { providerType } from "../../type";
import clientPromise from "./../../lib/mongodb";

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await fetch(
    "https://tranquil-shelf-20388.herokuapp.com/paths"
  );
  const paths = await result.json();

  return {
    paths: paths.map((path: providerType) => ({
      params: { providerID: path },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const providerID = context.params?.providerID as string;
  const client = await clientPromise;
  let data = await client.db().collection("providers").find({}).toArray();
  data = JSON.parse(JSON.stringify(data));

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
