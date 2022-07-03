
import styled from 'styled-components';

export const AddProviderWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;

  height: 70px;
  
  margin: 10px 0;
  padding: 10px;

  border-radius: 50%;
  border: 2px solid #2965aa;

  font-family: sans-serif;
  font-size: 22px;
  color: #ffffff;

  cursor: pointer;

  background-color: #4573a75b;

  &:hover {
    background-color: #4573a7;
    /* background-color: #2965aa; */
  }
`

export const LogoAddWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 65px;
  height: 65px;

  transition: all 0.5s ease;
  &:hover {
    transform: rotate(180deg);
  }
` 