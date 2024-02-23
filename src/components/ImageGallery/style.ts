import { colors } from "constants/styles";
import styled from "styled-components";
import { pxToRem } from "utils";

const { gray } = colors;
export default styled.div`
  .gallery__img {
    width: 100%;
    object-fit: contain;
    max-height: ${pxToRem(400)};
  }
  .f-thumbs {
    display: none;
  }
  .f-thumbs:where(:first-child, :nth-child(2)) {
    display: block !important;
  }
  .f-carousel__slide {
    display: flex;
    align-items: center;
  }
  .fullscreen-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    padding: ${pxToRem(6)};
    color: ${gray}dd;
    border-radius: ${pxToRem(6)};
  }
`;
