import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { gray } = colors;
export default styled.main`
  .banner__img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
    object-position: center top;
    user-select: none;
  }
  .cards__wrp {
    max-width: ${pxToRem(1550)};
    margin: ${pxToRem(50)} auto;
    ${layout("grid", { cols: 4, rows: "auto" })}
    .card {
      box-shadow: 0 0 ${pxToRem(20)} ${gray}20;
      padding: ${pxToRem(15)};
      border-radius: ${pxToRem(10)};
      cursor: pointer;
      img {
        width: 100%;
        object-fit: cover;
      }
      .card__head {
        margin: ${pxToRem(10)} 0 0 0;
        h1 {
            font-size: ${pxToRem(23)};
            font-weight: 600;
        }
      }
    }
  }
`;
