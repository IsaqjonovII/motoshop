import styled from "styled-components";
import { pxToRem } from "utils";
import { btn } from "styles/mixin";
import { colors } from "constants/styles";

const { gray } = colors;
export default styled.div`
  padding: ${pxToRem(30)} 0;
  .auth__title {
    font-size: ${pxToRem(25)};
    margin-bottom: ${pxToRem(20)};
  }
  .auth__btn {
    width: 100%;
  }
  .back {
    display: inline-block;
    font-size: ${pxToRem(18)};
    margin-bottom: ${pxToRem(20)};
    cursor: pointer;
    color: ${gray};
    svg {
      margin-right: ${pxToRem(10)};
    }
  }
  @media only screen and (min-width: ${pxToRem(600)}) {
    max-width: ${pxToRem(550)};
    margin: 0 auto;
    .auth__title {
      font-size: ${pxToRem(30)};
    }
    .inp {
      font-size: ${pxToRem(18)};
    }
    .auth__btn {
      display: block;
      max-width: ${pxToRem(230)};
      margin: 0 auto;
      &:hover {
        ${btn()}
      }
    }
  }
  @media only screen and (min-width: ${pxToRem(1200)}) {
    .auth__title {
      font-size: ${pxToRem(35)};
    }
   
    .auth__btn {
      display: block;
      max-width: ${pxToRem(230)};
      margin: 0 auto;
    }
  }
`;
