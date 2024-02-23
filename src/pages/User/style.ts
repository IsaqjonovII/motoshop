import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { gray, teal, red } = colors;

export default styled.div`
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
`;
