import { colors } from "constants/styles";
import styled from "styled-components";
import { layout } from "styles/mixin";
import { pxToRem } from "utils";

const { teal, borderGray, white, gray, red } = colors;

export default styled.div`
  border: ${pxToRem(1)} solid ${gray}30;
  border-radius: ${pxToRem(10)};
  cursor: pointer;
  transition: 200ms ease-in-out;
  &:hover {
    box-shadow: ${borderGray} 0 0 ${pxToRem(2)} ${pxToRem(5)};
  }
  .card__content {
    padding: ${pxToRem(10)};
  }
  .ad__detail {
    ${layout("flex")}
    .detail__text {
      padding: 0 ${pxToRem(10)};
    }
  }
  position: relative;
  .img__wrp {
    width: 100%;
    height: 250px;
    border-radius: ${pxToRem(10)} ${pxToRem(10)} 0 0;
    background-image: linear-gradient(${white}, ${borderGray});
    background-position: 200% auto;
    animation: loading 1s infinite linear;
    .icons {
      position: absolute;
      top: .825rem;
      right: .5rem;
      ${layout("center")}
      row-gap: ${pxToRem(6)};
    }
    .icon__wrp {
      width: ${pxToRem(35)};
      height: ${pxToRem(35)};
      ${layout("center")}
    }
    .heart__icon, .delete__icon {
      width: 100%;
      height: 100%;
      padding: 0.15rem;
      border-radius: ${pxToRem(4)};
      background-color: ${white};
      color: ${teal};
    }
    .delete__icon {
      background-color: ${red};
      color: ${white};
      padding: 0.2rem;
    }
    .card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${pxToRem(10)} ${pxToRem(10)} 0 0;
    }
  }
  .card__head {
   margin-top: ${pxToRem(10)};
  }
  .card__row {
    ${layout("flex")}
    margin-top: ${pxToRem(10)};
  }
  .views__icon {
    vertical-align: middle;
    margin-left: ${pxToRem(3)};
  }
  .label {
    font-weight: 300;
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
  @media only screen and (max-width: ${pxToRem(550)}) {
    max-width: ${pxToRem(400)};
    width: 100%;
    margin: auto;
  }
  @keyframes loading {
    to {
      background-position: 200% center;
    }
  }
`;
