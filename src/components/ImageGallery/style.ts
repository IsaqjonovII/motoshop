import styled from "styled-components";
import { pxToRem } from "utils";

export default styled.div`
  .gallery__img {
    width: 100%;
    object-fit: contain;
    max-height: ${pxToRem(450)};
  }
  .f-thumbs:nth-child(3) {
    display: none;
  }
`;
