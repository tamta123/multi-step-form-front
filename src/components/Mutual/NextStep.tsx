import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const NextStep = ({ type, onSubmit, nextPage, previousPage }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNextStepClick = () => {
    onSubmit();
  };

  const handleGoBackClick = () => {
    navigate(previousPage);
  };

  return (
    <Wrapper>
      {location.pathname === "/" ? (
        <Back></Back>
      ) : (
        <Back onClick={handleGoBackClick}>Go Back</Back>
      )}
      {location.pathname === "/Finish" ? (
        <ConfirmButton type={type} onClick={handleNextStepClick}>
          Confirm
        </ConfirmButton>
      ) : (
        <NextButton type={type} onClick={handleNextStepClick}>
          Next Step
        </NextButton>
      )}
    </Wrapper>
  );
};
export default NextStep;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #fff;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

const Back = styled.span`
  color: #9699aa;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const NextButton = styled.button`
  width: 97px;
  height: 40px;
  border-radius: 4px;
  background: #022959;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
`;
const ConfirmButton = styled.button`
  width: 97px;
  height: 40px;
  border-radius: 4px;
  background: #483eff;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
`;
