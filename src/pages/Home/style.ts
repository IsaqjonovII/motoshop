import styled from "styled-components";
import { pxToRem } from "utils";
import { layout } from "styles/mixin";
import { colors } from "constants/styles";

const { gray } = colors;

export default styled.main`
  .banner__img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    user-select: none;
  }
  .section {
    margin: ${pxToRem(30)} 0;
    padding: 0 ${pxToRem(50)};
  }
  .section__title {
    font-size: ${pxToRem(40)};
    color: ${gray};
  }
  .grid__wrp {
    max-width: ${pxToRem(1550)};
    margin: ${pxToRem(50)} auto;
    ${layout("grid", { cols: 3, rows: "auto" })}
    grid-gap: ${pxToRem(30)};
   
  }
  @media only screen and (max-width: ${pxToRem(1024)}) {
    .grid__wrp {
      ${layout("grid", { cols: 2, rows: "auto" })}
      grid-gap: ${pxToRem(15)};
    }
    .section {
      padding:  0 ${pxToRem(30)};
    }
    .section__title {
      font-size: ${pxToRem(34)};
    }
  }
  @media only screen and (max-width: ${pxToRem(768)}) {
    .section {
      padding:  0 ${pxToRem(20)};
    }
    .grid__wrp {
    ${layout("grid", { cols: 1, rows: "auto" })}
    grid-gap: ${pxToRem(20)};
    }
    .section__title {
      font-size: ${pxToRem(28)};
    }
  }
`;
