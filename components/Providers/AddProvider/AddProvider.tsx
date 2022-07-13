import Link from "next/link";

import { routesAddProvider } from "../../../routes/route-path";
import { ProviderLogo } from "../ProviderLogo";

import { AddProviderWrapper } from "./AddProvider.style";

export const AddProvider = () => {
  return (
    <AddProviderWrapper key="Add new Provider">
      <Link href={routesAddProvider}>
        <a>
          <ProviderLogo src={"/plus.svg"} alt="Add Logo" isAnimated={true} />
        </a>
      </Link>
    </AddProviderWrapper>
  );
};
