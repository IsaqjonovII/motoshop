import { IText } from "interfaces/components";
import { StyledH1 } from "./style";

export const Text = ({ className, children, size, bold }: IText) => {
  return (
    <StyledH1 className={className} $size={size} $bold={bold}>
      {children}
    </StyledH1>
  );
};
