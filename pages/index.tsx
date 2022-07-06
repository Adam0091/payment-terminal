import { NextPage } from "next";
import styled from "styled-components";

import Layout from "../components/Layout";

import { PageWrapper } from "../components/PageWrapper.style";

const TitleWrapper = styled.div`
  @import "https://fonts.googleapis.com/css?family=Russo+One";

  h2.funny-title {
    -webkit-text-stroke: 1px white;
    font-size: 70px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-family: "Russo One", sans-serif;
    font-weight: 900;
    letter-spacing: 8px;
  }

  @keyframes move-background {
    0% {
      background-position: -300px 0;
    }
    100% {
      background-position: 300px -300px;
    }
  }

  .section-title {
    animation-play-state: running;
    color: transparent;
    background: url("https://img4.goodfon.ru/original/1280x800/5/38/krug-koltso-oboi.jpg")
      repeat #ece7ea;
    background-size: cover;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-animation: move-background 20s infinite linear alternate;
    -moz-animation: move-background 20s infinite linear alternate;
    animation: move-background 20s infinite linear alternate;
  }
`;

const App: NextPage = () => {
  return (
    <>
      <Layout>
        <PageWrapper>
          <TitleWrapper>
            <h2 className="funny-title section-title">Welcome to CodePay</h2>
          </TitleWrapper>
        </PageWrapper>
      </Layout>
    </>
  );
};

export default App;
