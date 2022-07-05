import Layout from "../../components/Layout/Layout";
import ProviderPaymentForm from "../../components/Providers/ProviderPaymentForm";
import { PageWrapper } from "../../components/PageWrapper.style";
import { GetServerSideProps } from "next";
import { providerType } from "../../type";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providerID = context.params?.providerID as string;

  const response = await fetch("http://localhost:3000/api/providers");
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
