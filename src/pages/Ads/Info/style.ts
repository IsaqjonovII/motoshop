import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { gray } = colors;

export default styled.div`
  padding: ${pxToRem(50)} 0;
  .page__container {
    min-height: 60vh;
    min-height: 60svh;
    ${layout("grid", { cols: 3, rows: 1 })}
  }
  .images {
    grid-column: 1 / 3;
    border-right: 1px solid ${gray}30;
    padding-right: ${pxToRem(20)};
  }
  .content {
    grid-column: 3 / 4;
    position: sticky;
    top: 0;
    padding-left: ${pxToRem(20)};
  }
  .head__items {
    ${layout("flex")};
    flex-wrap: wrap;
  }
  .content__head {
    border-bottom: ${pxToRem(1)} solid ${gray}30;
    padding-bottom: ${pxToRem(10)};
  }
  .content__body {
    padding: ${pxToRem(10)} 0;
  }
  .body__list {
    ${layout("flex")}
  }
`;
