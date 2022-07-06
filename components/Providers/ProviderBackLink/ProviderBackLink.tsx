import Image from "next/image";
import { useRouter } from "next/router";
import { WrapperBackLink } from "./ProviderBackLink.style";

const ProviderBackLink = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div onClick={handleClick}>
      <WrapperBackLink>
        <Image src="/arrow.svg" width={30} height={30} alt="" />
      </WrapperBackLink>
    </div>
  );
};

export default ProviderBackLink;
