import styled from "styled-components";
import { pxToRem } from "utils";
import { layout } from "styles/mixin";
import { colors } from "constants/styles";

const { black } = colors;
export default styled.main`
  .banner__img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    user-select: none;
  }
  .cards__wrp {
    max-width: ${pxToRem(1550)};
    margin: ${pxToRem(50)} auto;
    padding: 0 ${pxToRem(50)};
    ${layout("grid", { cols: 4, rows: "auto" })}
    grid-gap: ${pxToRem(30)};
    .card {
      box-shadow: rgba(0, 0, 0, 0.05) 0 ${pxToRem(6)} ${pxToRem(24)} 0,
        rgba(0, 0, 0, 0.08) 0 0 0 ${pxToRem(1)};
      padding: ${pxToRem(15)};
      border-radius: ${pxToRem(10)};
      cursor: pointer;
      img {
        width: 100%;
        object-fit: cover;
        border-radius: ${pxToRem(6)};
      }
      .card__head {
        margin: ${pxToRem(10)} 0 0 0;
        h1 {
          font-size: ${pxToRem(23)};
        color: ${black};
          font-weight: 600;
        }
      }
      .product__address {
        margin-top: ${pxToRem(20)};
        font-size: ${pxToRem(16)};
        color: ${black};
      }
    }
  }
`;
