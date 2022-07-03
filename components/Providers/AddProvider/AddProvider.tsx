import { LogoStyle } from "../Provider/Provider.style";
import { AddProviderWrapper, LogoAddWrapper } from './AddProvider.style';

const AddProvider = () => {
  return (
    <AddProviderWrapper key="Add new Provider">
      <LogoAddWrapper>
        <LogoStyle src={"/plus.svg"} alt="Add Logo" />
      </LogoAddWrapper>
    </AddProviderWrapper>
  );
};

export default AddProvider;
