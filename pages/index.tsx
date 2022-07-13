import { NextPage } from "next";

import { Layout } from "../components/Layout";
import { AnimTitle } from "./../components/UI-Kit/AnimTitle/";

import { PageWrapper } from "../components/PageWrapper.style";

const App: NextPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <AnimTitle text={"Welcome to CodePay"} />
      </PageWrapper>
    </Layout>
  );
};

export default App;
