import styled from "styled-components";
import { pxToRem } from "utils";

export default styled.div`
    padding: ${pxToRem(30)} 0;
    .auth__title {
        font-size: ${pxToRem(25)};
        margin-bottom: ${pxToRem(20)};
    }
    .inp__label {
        display: block;
        font-size: ${pxToRem(18)};
        margin: ${pxToRem(20)} 0 ${pxToRem(5)} 0;
    }
    .inp {
        height: ${pxToRem(45)};
        font-size: ${pxToRem(16)};
    }
`