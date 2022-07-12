import styled from "styled-components";
import { Alert, styled as styledMUI } from "@mui/material";
import { fontSize } from "../../../style_constants";

export const AlertFixed = styledMUI(Alert)({
  position: "fixed",
  top: "90%",
  right: "0",
  margin: "0 30px 0 0",
});

export const FormWrapper = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
`;

export const ProviderLogoWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  column-gap: 20px;
  font-size: ${fontSize};

  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 10px;
`;
