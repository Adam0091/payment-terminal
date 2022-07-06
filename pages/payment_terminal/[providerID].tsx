import Layout from "../../components/Layout/Layout";
import ProviderPaymentForm from "../../components/Providers/ProviderPaymentForm";
import { PageWrapper } from "../../components/PageWrapper.style";
import { GetStaticPaths, GetStaticProps } from "next";
import { providerType } from "../../type";

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await fetch(
    "https://tranquil-shelf-20388.herokuapp.com/paths"
  );
  const paths = await result.json();

  return {
    paths: paths.map((path: providerType) => ({ params: { providerID: path } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const providerID = context.params?.providerID as string;

  const response = await fetch(`/api/providers`);
  const data = await response.json();

  return { props: { provider: data[providerID] } };
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
