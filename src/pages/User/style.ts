import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { gray } = colors;

export default styled.div`
  ${layout("flex")}
  align-items: flex-start;
  .profile__user {
    width: 100%;
    max-width: ${pxToRem(350)};
    min-width: ${pxToRem(350)};
    height: calc(100vh - ${pxToRem(80)});
    position: sticky;
    top: ${pxToRem(80)};
    padding: ${pxToRem(20)} 0;
    border-right: ${pxToRem(1)} solid ${gray}30;
  }
  .user__avatar {
    ${layout("flex")}
    justify-content: start;
    div {
      margin-left: ${pxToRem(10)};
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
`;
