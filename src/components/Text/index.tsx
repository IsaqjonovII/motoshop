import { IText } from "interfaces/components";
import { StyledH1 } from "./style";

export const Text = ({ className, children, size }: IText) => {
  return (
    <StyledH1 className={className} $size={size}>
      {children}
    </StyledH1>
  );
};
