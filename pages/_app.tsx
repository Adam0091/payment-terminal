import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { normalize } from "styled-normalize";

const Global = createGlobalStyle`
  box-sizing: border-box;
  ${reset};
  ${normalize};
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
