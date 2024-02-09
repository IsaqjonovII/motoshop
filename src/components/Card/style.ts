import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { teal, borderGray, white, gray } = colors;

export default styled.div`
  border: ${pxToRem(1)} solid ${gray}30;
  border-radius: ${pxToRem(10)};
  cursor: pointer;
  transition: 200ms ease-in-out;
  &:hover {
    box-shadow: ${borderGray} 0 0 ${pxToRem(2)} ${pxToRem(5)};
  }
  .card__content {
    padding: ${pxToRem(15)};
  }
  position: relative;
  .img__wrp {
    width: 100%;
    height: 250px;
    border-radius: ${pxToRem(10)} ${pxToRem(10)} 0 0;
    background-image: linear-gradient(${white}, ${borderGray});
    background-position: 200% auto;
    animation: loading 1s infinite linear;
    .icon__wrp {
      position: absolute;
      top: .825rem;
      right: .5rem;
    }
    .heart__icon {
      width: ${pxToRem(35)};
      height: ${pxToRem(35)};
      background-color: ${white};
      border-radius: ${pxToRem(4)};
      z-index: 999;
      padding: .25rem;
      color: ${teal};
    }
    .card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${pxToRem(10)} ${pxToRem(10)} 0 0;
    }
  }
  .card__head {
    ${layout("flex")}
    .head__text {
      text-transform: capitalize;
    }
  }
  .card__title {
    ${layout("flex")}
    margin: ${pxToRem(15)} 0;
  }
  @media only screen and (max-width: ${pxToRem(1200)}) {
    .card__head {
      .card__title {
        font-size: ${pxToRem(19)};
      }
    }
    .product__address {
      font-size: ${pxToRem(14)};
    }
  }
  @keyframes loading {
    to {
      background-position: 200% center;
    }
  }
`;
