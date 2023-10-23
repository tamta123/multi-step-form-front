import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import InfoSchema from "../schemas/PersonalInfoSchema";
import { RootState } from "../store/redux";

const Header = () => {
  const FormData = useSelector((state: RootState) => state.customer);
  console.log(FormData);
  const location = useLocation();

  const isActive = (to: any) => {
    return location.pathname === to ? "active" : "";
  };

  const disableNavigation = () => {
    try {
      InfoSchema.validateSync(FormData, { abortEarly: false });
      return false;
    } catch (error) {
      return true;
    }
  };
  console.log(disableNavigation());

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
          className={isActive("/plan")}
          style={{ textDecoration: "none" }}
        >
          <Number
            disabled={disableNavigation()}
            className={isActive("/plan")}
            style={disableNavigation() ? { opacity: "0.5" } : { opacity: "1" }}
          >
            2
          </Number>
        </Link>
        <Link
          to="/AddOns"
          className={isActive("/addOns")}
          style={{ textDecoration: "none" }}
        >
          <Number
            disabled={disableNavigation()}
            className={isActive("/addOns")}
            style={disableNavigation() ? { opacity: "0.5" } : { opacity: "1" }}
          >
            3
          </Number>
        </Link>
        <Link
          to="/Finish"
          className={isActive("/finish")}
          style={{ textDecoration: "none" }}
        >
          <Number
            disabled={disableNavigation()}
            className={isActive("/finish")}
            style={disableNavigation() ? { opacity: "0.5" } : { opacity: "1" }}
          >
            4
          </Number>
        </Link>
      </Wrapper>
    </HeaderElement>
  );
};

const HeaderElement = styled.header`
  background-image: url("/images/bg-sidebar-mobile.svg");
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
