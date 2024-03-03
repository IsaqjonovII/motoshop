import styled from "styled-components";
import { pxToRem } from "utils";
import { layout } from "styles/mixin";
import { colors } from "constants/styles";

const { gray, teal, red, bgGray } = colors;

export default styled.div`
min-height: calc(100svh - 100px);
  .need__auth {
    width: 100%;
    padding: ${pxToRem(40)};
    text-align: center;
    font-size: ${pxToRem(20)};
    a {
      color: ${teal};
    }
  }
  .profile__user {
    width: 100%;
    ${layout("flex")}
    border-bottom: ${pxToRem(1)} solid ${gray}30;
    padding: ${pxToRem(30)} 0;
  }
  .logout__btn {
    background: ${red};
  }
  .ant-tabs-nav {
    position: sticky;
    top: ${pxToRem(74)};
    z-index: 999;
    overflow-x: auto;
    background-color: ${bgGray};
  }
  @media only screen and (min-width: 768px) {
      .ant-tabs-nav {
        top: ${pxToRem(80)};
      }
  } 
`;
