import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/redux";
import InfoSchema from "../schemas/PersonalInfoSchema";

const NavBar = () => {
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

  return (
    <HeaderElement>
      <Wrapper>
        <Link
          to="/"
          className={isActive("/")}
          style={{ textDecoration: "none" }}
        >
          <NumberWrap>
            <Number className={isActive("/")}>1</Number>
            <StepWrap>
              <Step>STEP 1</Step>
              <Text>YOUR INFO</Text>
            </StepWrap>
          </NumberWrap>
        </Link>
        <Link
          to="/plan"
          className={isActive("/plan")}
          style={{ textDecoration: "none" }}
        >
          <NumberWrap>
            <Number
              disabled={disableNavigation()}
              className={isActive("/addOns")}
              style={
                disableNavigation() ? { opacity: "0.5" } : { opacity: "1" }
              }
            >
              2
            </Number>
            <StepWrap>
              <Step>STEP 2</Step>
              <Text>SELECT PLAN</Text>
            </StepWrap>
          </NumberWrap>
        </Link>
        <Link
          to="/addOns"
          className={isActive("/addOns")}
          style={{ textDecoration: "none" }}
        >
          <NumberWrap>
            <Number
              disabled={disableNavigation()}
              className={isActive("/addOns")}
              style={
                disableNavigation() ? { opacity: "0.5" } : { opacity: "1" }
              }
            >
              3
            </Number>
            <StepWrap>
              <Step>STEP 3</Step>
              <Text>ADD-ONS</Text>
            </StepWrap>
          </NumberWrap>
        </Link>
        <Link
          to="/finish"
          className={isActive("/finish")}
          style={{ textDecoration: "none" }}
        >
          <NumberWrap>
            <Number
              disabled={disableNavigation()}
              className={isActive("/finish")}
              style={
                disableNavigation() ? { opacity: "0.5" } : { opacity: "1" }
              }
            >
              4
            </Number>
            <StepWrap>
              <Step>STEP 4</Step>
              <Text>SUMMARY</Text>
            </StepWrap>
          </NumberWrap>
        </Link>
      </Wrapper>
    </HeaderElement>
  );
};

const HeaderElement = styled.header`
  background-image: url("/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  height: 568px;
  width: 274px;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-left: 32px;
  gap: 32px;
`;

const NumberWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
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
const StepWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Step = styled.div`
  color: #abbcff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Text = styled.div`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default NavBar;
