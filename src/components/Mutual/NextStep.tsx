import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

type NextStepProps = {
  type: "button" | "submit" | "reset";
  onSubmit?: () => void;
  nextPage?: string;
  previousPage?: string;
};

const NextStep: React.FC<NextStepProps> = ({
  type,
  onSubmit,
  previousPage,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNextStepClick = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  const handleGoBackClick = () => {
    if (previousPage) {
      navigate(previousPage);
    }
  };

  return (
    <Wrapper>
      {location.pathname === "/" ? (
        <Back></Back>
      ) : (
        <Back onClick={handleGoBackClick}>Go Back</Back>
      )}
      {location.pathname === "/finish" ? (
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
  @media (min-width: 768px) {
    box-shadow: none;
    padding: 0;
  }
`;

const Back = styled.span`
  color: #9699aa;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  :hover {
    color: #022959;
  }
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
  :hover {
    background: rgba(146, 140, 255, 1);
  }
`;
