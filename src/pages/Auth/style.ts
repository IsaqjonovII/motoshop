import { colors } from "constants/styles";
import styled from "styled-components";
import { btn } from "styles/mixin";
import { pxToRem } from "utils";

const { teal, gray } = colors;
export default styled.div`
  padding: ${pxToRem(30)} 0;
  .auth__title {
    font-size: ${pxToRem(25)};
    margin-bottom: ${pxToRem(20)};
  }
  .auth__btn {
    width: 100%;
  }
  .ant-tabs-tab {
    font-size: ${pxToRem(18)} !important;
    &:hover {
      color: ${teal};
    }
  }
  .ant-tabs-ink-bar {
    background: ${teal};
  }
  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${teal} !important;
  }

  .ant-tabs-tab:hover {
  }
  .back {
    display: inline-block;
    font-size: ${pxToRem(18)};
    margin-bottom: ${pxToRem(20)};
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
    .inp {
      font-size: ${pxToRem(18)};
    }
    .auth__btn {
      display: block;
      max-width: ${pxToRem(230)};
      margin: 0 auto;
    }
  }
`;
