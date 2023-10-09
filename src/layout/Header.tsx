import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderElement>
      <Wrapper>
        <Link to="/">
          <Number>1</Number>
        </Link>
        <Link to="/AddOns">
          <Number>2</Number>
        </Link>
        <Link to="/Plan">
          <Number>3</Number>
        </Link>
        <Link to="/Finish">
          <Number>4</Number>
        </Link>
      </Wrapper>
    </HeaderElement>
  );
};
export default Header;

const HeaderElement = styled.header`
  background-image: url("../../public/images/bg-sidebar-mobile.svg");
  background-repeat: no-repeat;
  height: 172px;
  width: 375px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-inline: 98px;
  padding-top: 32px;
`;

const Number = styled.div`
  width: 33px;
  height: 33px;
  border: solid 1px white;
  border-radius: 50%;
  color: var(--White, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
