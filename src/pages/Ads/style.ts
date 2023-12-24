import styled from "styled-components";
import { pxToRem } from "utils";

export const StyledPostAd = styled.div`
  padding: ${pxToRem(30)};

  .post__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 920px) {
    .post__form {
      margin: 0 auto;
      flex-direction: column;
    }
  }
`;

export default styled.div``;
