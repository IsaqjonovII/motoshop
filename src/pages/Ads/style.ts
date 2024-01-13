import styled from "styled-components";
import { pxToRem } from "utils";

export const StyledPostAd = styled.div`
  padding: ${pxToRem(30)};

  .post__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${pxToRem(20)};
    & > div {
      width: 100%;
      max-width: ${pxToRem(520)};
    }
  }
  @media only screen and (max-width: ${pxToRem(920)}) {
    .ad__title {
      text-align: center;
    }
    .post__form {
      margin: 0 auto;
      grid-template-columns: 1fr;
      justify-items: center;
    }
    .ad__btn {
      width: 100%;
      max-width: ${pxToRem(520)};
    }
  }
  @media only screen and (max-width: ${pxToRem(768)}) {
    padding: ${pxToRem(20)} 0;
  }
`;

export default styled.div``;
