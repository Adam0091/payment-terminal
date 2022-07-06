import Link from "next/link";

import Logo from "../ProviderLogo";

import { AddProviderWrapper } from "./AddProvider.style";

const AddProvider = () => {
  return (
    <>
      <AddProviderWrapper key="Add new Provider">
        <Link href="/payment_terminal/add_provider">
          <a>
            <Logo src={"/plus.svg"} alt="Add Logo" isAnimated={true} />
          </a>
        </Link>
      </AddProviderWrapper>
    </>
  );
};

export default AddProvider;
