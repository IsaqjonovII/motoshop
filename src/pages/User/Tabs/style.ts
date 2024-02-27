import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { red } = colors;
export default styled.div`
  padding: 0 0 ${pxToRem(30)} 0;
  /* SETTINGS */
    .row {
      ${layout("flex")}
    }
    .danger__zone {
      margin: ${pxToRem(20)} 0;
      button {
        background-color: ${red};
      }
    }
    .form__btn {
      width: 100%;
      max-width: 100%;
      margin-top: ${pxToRem(15)};
      font-size: var(--font-body);
    }
  /* SETTINGS */
  .ads__wrp {
    ${layout("grid", { cols: 1, rows: "auto" })}
    gap: ${pxToRem(10)};
  }


  @media only screen and (min-width: 550px) {
    .ads__wrp {
      ${layout("grid", { cols: 2, rows: "auto" })}
    }
  }
  @media only screen and (min-width: 768px) {
    .ads__wrp {
      ${layout("grid", { cols: 3, rows: "auto" })}
    }
  }
  @media only screen and (min-width: 1024px) {
    .ads__wrp {
      ${layout("grid", { cols: 4, rows: "auto" })}
    }
  }
`;
