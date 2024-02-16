import styled from "styled-components";
import { pxToRem } from "utils";

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
`;
