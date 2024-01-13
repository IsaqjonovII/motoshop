import { IButton } from "interfaces/components";
import StyledButton from "./style";

export const Button = ({ type, children, className, onClick }: IButton) => {
  return (
    <StyledButton
      onClick={onClick}
      className={className}
      type={type ?? "button"}
    >
      {children}
    </StyledButton>
  );
};
