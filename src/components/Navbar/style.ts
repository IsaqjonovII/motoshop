import styled from "styled-components";
import { pxToRem } from "utils";
import { layout } from "styles/mixin";
import { colors } from "constants/styles";

const { white, teal, gray } = colors;

export default styled.header`
  background-color: ${white};
  box-shadow: 0 ${pxToRem(2)} ${pxToRem(2)} ${gray}10;
  border-bottom: ${pxToRem(1)} solid ${gray}30;
  user-select: none;
  .nav__container {
    ${layout("flex")}
    max-width: ${pxToRem(1555)};
    margin: auto;
    height: ${pxToRem(80)};
    padding: 0 ${pxToRem(40)};
  }
  .nav__left {
    ${layout("flex")}
    height: 100%;
    .nav__logo {
        font-size: ${pxToRem(30)};
        font-weight: 700;
        cursor: pointer;
        transition: 200ms ease-in-out;
        margin-right: ${pxToRem(25)};
        line-height: 1.5;
        color: ${teal};
        & img {
          height: 100%;
          object-fit: cover;
        }
    }
    .nav__menu {
        ${layout("flex")}
        .menu__item {
            text-transform: capitalize;
            font-size: ${pxToRem(18)};
            margin: 0 ${pxToRem(5)};
            padding: ${pxToRem(8)};
            color: ${gray}c9;
            border-radius: ${pxToRem(4)};
            transition: 100ms ease-in-out;
            border-bottom: ${pxToRem(1)} solid transparent;
            &:hover {
              color: ${teal};
            }
        }
    }
  }
  .nav__right {
    ${layout("flex")}
    .right__btn {
      margin-right: ${pxToRem(10)};
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
  .bars__icon {
    margin-left: ${pxToRem(5)};
    font-size: ${pxToRem(24)};
    cursor: pointer;
  }
  .login__link {
    padding: ${pxToRem(10)} ${pxToRem(20)};
    background-color: ${teal};
    color: ${white};
    font-size: ${pxToRem(18)};
    border-radius: ${pxToRem(6)};
    border: ${pxToRem(2)} solid transparent;
    transition: 200ms ease-in-out;
    &:hover {
      color: ${teal};
      background-color: transparent;
      border: ${pxToRem(2)} solid ${teal};
    }
  }
  @media screen and (min-width: ${pxToRem(1025)}) {
    .bars__icon {
      display: none;
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
    .login__link {
      padding: ${pxToRem(6)} ${pxToRem(14)};
      font-size: ${pxToRem(16)};
    }
  }
   
  }
  @media screen and (max-width: ${pxToRem(1024)}) {
    .nav__left .nav__menu {
      padding: 0;
    }
    .nav__container {
      padding: ${pxToRem(20)};
    }
  }
  @media screen and (max-width: ${pxToRem(768)}){
    .nav__left .nav__logo{
      max-width: ${pxToRem(100)};
      img {
      max-width: ${pxToRem(100)};
        object-fit: cover;
      }
    }
    .nav__left, .nav__right {
      height: 60px !important;
    }
  } 
  @media screen and (max-width: ${pxToRem(550)}){
    .nav__right .user__wrp {
      span {
        display: none;
      }
    }
  } 
`;