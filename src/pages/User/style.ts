import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { gray, white, teal } = colors;

export default styled.div`
  ${layout("flex")}
  align-items: flex-start;
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
    max-width: ${pxToRem(270)};
    min-width: ${pxToRem(270)};
    height: calc(100vh - ${pxToRem(80)});
    position: sticky;
    top: ${pxToRem(80)};
    padding: ${pxToRem(20)} ${pxToRem(10)} ${pxToRem(20)} 0;
    border-right: ${pxToRem(1)} solid ${gray}30;
  }
  .user__avatar {
    ${layout("flex")}
    justify-content: start;
    background-color: ${white}8d;
    border: ${pxToRem(1)} solid ${gray}30;
    border-radius: ${pxToRem(6)};
    padding: ${pxToRem(10)};
    & > div {
      text-align: right;
      margin-left: ${pxToRem(10)};
      flex: 1;
    }
  }
  .user__name {
    font-size: ${pxToRem(30)};
    font-weight: 600;
  }
  .avatar__img {
    border: ${pxToRem(1)} solid ${gray}80;
  }
  .profile__content {
    width: 100%;
  }
  .user__actions {
  }
  .action__wrp {
    margin: ${pxToRem(15)} 0;
    padding: ${pxToRem(8)} ${pxToRem(5)};
    justify-content: start;
    border-radius: ${pxToRem(6)};
    border: ${pxToRem(1)} solid transparent;
    cursor: pointer;
    transition: 200ms ease-in-out;
    &:hover {
      background-color: ${white}8d;
      border-radius: ${pxToRem(6)};
      border-color: ${gray}30;
    }
    .action__icon {
      width: ${pxToRem(30)};
      height: ${pxToRem(30)};
      margin: 0 ${pxToRem(20)} 0 0;
    }
  }
  .user__ads {
    height: calc(100vh - ${pxToRem(127)} - ${pxToRem(260)});
  }
  .ad__btn {
    width: 100%;
    height: ${pxToRem(45)};
    border: none;
    background-color: ${teal};
    color: ${white};
    font-size: ${pxToRem(16)};
    border-radius: ${pxToRem(6)};
    cursor: pointer;
    box-shadow: 0 3px 0 #079090;
    transition: 250ms ease-in-out;
    &:hover {
      background-color: ${teal}dd;
    }
  }
  .profile__content {
    padding: ${pxToRem(20)};
  }
`;
