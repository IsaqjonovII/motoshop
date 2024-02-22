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
   margin-top: ${pxToRem(10)};
  }
  .card__row {
    ${layout("flex")}
    margin: ${pxToRem(15)} 0 0 0;
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
  @keyframes loading {
    to {
      background-position: 200% center;
    }
  }
`;
export const StyledCard = styled.div`
  height: ${pxToRem(200)};
  background-color: ${white};
  border-radius: ${pxToRem(6)};
  ${layout("flex")}
  .image__container {
    width: 100%;
    max-width: 300px;
    height: 100%;
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${pxToRem(6)} 0 0 ${pxToRem(6)};
    }
  }
  .content {
    width: 100%;
    height: 100%;
    padding: ${pxToRem(20)};
    ${layout("flex")}
    align-items: start;
    flex-direction: column;
  }
  .content__head {
    width: 100%;
    ${layout("flex")}
  }
  .content__main {
    margin: ${pxToRem(20)} 0;
  }
  .content__bottom {
    width: 100%;
    align-self: end;
    margin-top: auto;
    ${layout("flex")}
  }
  @media only screen and (max-width: 768px) {
    height: 180px;
    .image__container {
      max-width: 200px;
    }
    .content {
      padding: ${pxToRem(8)};
    }
  }
  @media only screen and (max-width: 550px) {
    .content__bottom {
      flex-direction: column-reverse;
      align-items: start;
      button {
        margin-top: ${pxToRem(10)};
      }
    }
    .image__container {
      max-width: 130px;
      max-height: 150px;
      .img {
        object-fit: contain;
      }
    }
  }
`;
