import Link from "next/link";

import { ProviderLogo } from "../ProviderLogo";

import { AddProviderWrapper } from "./AddProvider.style";

export const AddProvider = () => {
  return (
    <>
      <AddProviderWrapper key="Add new Provider">
        <Link href="/payment_terminal/add_provider">
          <a>
            <ProviderLogo src={"/plus.svg"} alt="Add Logo" isAnimated={true} />
          </a>
        </Link>
      </AddProviderWrapper>
    </>
  );
};
