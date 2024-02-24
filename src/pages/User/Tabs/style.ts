import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

export default styled.div`
  padding: 0 0 ${pxToRem(30)} 0;
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
