import styled from "styled-components";

const NextStep = ({ type, onSubmit }) => {
  const handleNextStepClick = () => {
    if (onSubmit) {
      onSubmit();
    }
  };
  return (
    <Wrapper>
      <Back>Go Back</Back>
      <Button type={type} onClick={handleNextStepClick}>
        Next Step
      </Button>
    </Wrapper>
  );
};
export default NextStep;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 72px; */
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

const Button = styled.button`
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
