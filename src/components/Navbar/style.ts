import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { white, borderGray, teal, darkGray } = colors;

export default styled.header`
  background-color: ${white};
  box-shadow: 0 ${pxToRem(2)} ${pxToRem(4)} ${darkGray}50;
  .nav__container {
    ${layout("flex")}
    max-width: ${pxToRem(1555)};
    margin: auto;
    height: ${pxToRem(80)};
    padding: 0 ${pxToRem(40)};
  }
  .nav__left {
    ${layout("flex")}
    .nav__logo {
        font-size: ${pxToRem(30)};
        font-weight: 700;
        cursor: pointer;
        transition: 200ms ease-in-out;
        margin-right: ${pxToRem(25)};
        line-height: 1.5;
        color: ${teal};
    }
    .nav__menu {
        ${layout("flex")}
        .menu__item {
            text-transform: capitalize;
            font-size: ${pxToRem(18)};
            margin: 0 ${pxToRem(5)};
            padding: ${pxToRem(8)};
            border-radius: ${pxToRem(4)};
            transition: 100ms ease-in-out;
            border-bottom: ${pxToRem(1)} solid transparent;
            &:hover {
              color: ${teal};
                background-color: ${borderGray}70;
                border-color: ${teal}30;
            }
        }
    }
  }
  .nav__right {
    ${layout("flex")}
    #language {
      outline: none;
      padding: ${pxToRem(7)} ${pxToRem(13)};
      border: ${pxToRem(2)} solid ${teal};
      color: ${teal};
      margin-right: ${pxToRem(15)};
      border-radius: ${pxToRem(5)};
      font-size: ${pxToRem(17)};
      option {
      padding: ${pxToRem(7)} ${pxToRem(13)};
      }
    }
    .user__wrp {
      ${layout("flex")}
      font-size: ${pxToRem(23)};
      span {
      font-size: ${pxToRem(18)};
      margin-left: ${pxToRem(5)};
      }
      padding: ${pxToRem(10)} ${pxToRem(13)};
      border-radius: ${pxToRem(8)};
      cursor: pointer;
      transition: background-color 150ms ease-out;
      border: ${pxToRem(2)} solid ${teal};
      color: ${teal};
      &:hover {
        background-color: ${teal};
        color: ${white};
      }
    }
  }
  @media screen and (max-width: ${pxToRem(1200)}) {
   .nav__left  {
    .nav__menu .menu__item {
      margin: 0;
      font-size: ${pxToRem(16)};
    }
    .nav__logo {
      font-size: ${pxToRem(26)};
    }
  } 
  .nav__right {
    .user__wrp {
      font-size: ${pxToRem(20)};
      padding: ${pxToRem(10)};
      span {          
        font-size: ${pxToRem(16)};
      }
    }
  }
   
  }
  @media screen and (max-width: ${pxToRem(1024)}) {
    .nav__left .nav__menu {
      display: none;
    }
    .nav__container {
      padding: ${pxToRem(20)};
    }
  }
  @media screen and (max-width: ${pxToRem(350)}){
    .nav__right .user__wrp {
      span {
        display: none;
      }
    }
  } 
`;
