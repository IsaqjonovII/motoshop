import StyledContainer from "./style";

type TContainer = {
  children: JSX.Element | JSX.Element[];
};
const Container = ({ children }: TContainer) => {
  return <StyledContainer className="container">{children}</StyledContainer>;
};

export default Container;
