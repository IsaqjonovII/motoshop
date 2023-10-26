import styled from "styled-components";
import { pxToRem } from "utils";

export default styled.div`
  max-width: ${pxToRem(1555)};
  margin: 0 auto;
  padding: 0 ${pxToRem(50)};

  @media only screen and (max-width: ${pxToRem(1024)}) {
    padding: 0 ${pxToRem(20)};
  }
`;
