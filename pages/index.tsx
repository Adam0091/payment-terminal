import { NextPage } from "next";

import Layout from "../components/Layout";

import { PageWrapper } from "../components/PageWrapper.style";
import AnimTitle from "./../components/UI-Kit/AnimTitle/AnimTitle";

const App: NextPage = () => {
  return (
    <>
      <Layout>
        <PageWrapper>
          <AnimTitle text={"Welcome to CodePay"} />
        </PageWrapper>
      </Layout>
    </>
  );
};

export default App;
