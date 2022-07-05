import Image from "next/image";
import Link from "next/link";
import { WrapperBackLink } from "./ProviderBackLink.style";

const ProviderBackLink = () => {
  return (
    <Link href={"../payment_terminal"}>
      <a>
        <WrapperBackLink>
          <Image src="/arrow.svg" width={30} height={30} alt="" />
        </WrapperBackLink>
      </a>
    </Link>
  );
};

export default ProviderBackLink;
