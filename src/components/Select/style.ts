import styled from "styled-components";
import { pxToRem } from "utils";

export default styled.div`
  width: 100%;
  max-width: 350px;
  height: ${pxToRem(45)};
  max-height: ${pxToRem(80)};
  border-radius: ${pxToRem(6)};
  overflow: hidden;
`;
