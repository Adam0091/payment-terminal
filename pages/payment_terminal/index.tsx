import { NextPage } from "next";

import Layout from "../../components/Layout/Layout";
import ChooseProvider from './../../components/Providers/ChooseProvider/ChooseProvider';

import { TerminalWrapper } from "./PaymentTerminal.style";


const PaymentTerminal: NextPage = () => {
  return (
    <Layout>
      <TerminalWrapper>
        <ChooseProvider />
      </TerminalWrapper>
    </Layout>
  );
};

export default PaymentTerminal;
