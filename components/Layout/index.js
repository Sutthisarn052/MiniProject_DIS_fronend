import Header from "./components/header";
import { StyledWrapper } from "./styled";

const Layout = ({ children, ...props }) => {
  return (
    <StyledWrapper>
      <Header token={props.token} />
      <div className="content">{children}</div>
    </StyledWrapper>
  );
};

export default Layout;
