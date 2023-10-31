import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { teal, gray, white } = colors;

const StyledInput = styled.div`
  margin: 0 0 ${pxToRem(15)} 0;
  input {
    width: 100%;
    max-width: ${pxToRem(550)};
    height: ${pxToRem(45)};
    border: ${pxToRem(1)} solid ${gray}40;
    outline: none;
    background-color: ${white};
    padding: 0 ${pxToRem(10)};
    border-radius: ${pxToRem(6)};
    &:focus,
    :focus-visible,
    :focus-within {
      border-color: ${teal};
      outline: ${pxToRem(2)} solid ${teal}70;
    }
  }
  .inp__label {
    display: block;
    font-size: ${pxToRem(19)};
    margin: ${pxToRem(8)} 0;
  }
  .phone__code {
    font-size: ${pxToRem(18)};
  }
  .inp__password input, .inp__phone input{
      all: unset;
      flex: 1;
      height: 100%;
      font-size: ${pxToRem(17)};
  }
  .inp__password, .inp__phone {
    ${layout("flex")}
    max-width: ${pxToRem(550)};
    height: ${pxToRem(45)};
    border: ${pxToRem(1)} solid ${gray}40;
    outline: none;
    background-color: ${white};
    padding: 0 ${pxToRem(10)};
    border-radius: ${pxToRem(6)};
    &:focus,
    &:hover {
      border-color: ${teal};
      outline: ${pxToRem(2)} solid ${teal}70;
    }
  }
`;

export { StyledInput };
