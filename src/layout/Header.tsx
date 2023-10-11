import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (to: any) => {
    return location.pathname === to ? "active" : "";
  };

  return (
    <HeaderElement>
      <Wrapper>
        <Link
          to="/"
          className={isActive("/")}
          style={{ textDecoration: "none" }}
        >
          <Number className={isActive("/")}>1</Number>
        </Link>
        <Link
          to="/Plan"
          className={isActive("/Plan")}
          style={{ textDecoration: "none" }}
        >
          <Number className={isActive("/Plan")}>2</Number>
        </Link>
        <Link
          to="/AddOns"
          className={isActive("/AddOns")}
          style={{ textDecoration: "none" }}
        >
          <Number className={isActive("/AddOns")}>3</Number>
        </Link>
        <Link
          to="/Finish"
          className={isActive("/Finish")}
          style={{ textDecoration: "none" }}
        >
          <Number className={isActive("/Finish")}>4</Number>
        </Link>
      </Wrapper>
    </HeaderElement>
  );
};

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

const Number = styled.button`
  width: 33px;
  height: 33px;
  background-color: transparent;
  border: solid 1px white;
  border-radius: 50%;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &.active {
    background: #bee2fd;
    color: #022959;
  }
`;

export default Header;
