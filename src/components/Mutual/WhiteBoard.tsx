import styled from "styled-components";
import { NavBar } from "../../layout";
import { NextStep } from ".";

type PropsType = {
  title: string;
  description: string;
  children: any;
  onSubmit: () => void;
  nextPage?: string;
  previousPage?: string;
};

const WhiteBoard: React.FC<PropsType> = ({
  title,
  description,
  children,
  onSubmit,
  nextPage,
  previousPage,
}) => {
  return (
    <Wrapper>
      <NavBar></NavBar>
      <CenterContent>
        <Content>
          <div>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <div>{children}</div>
          </div>
          <Next>
            <NextStep
              type="button"
              onSubmit={onSubmit}
              previousPage={previousPage}
              nextPage={nextPage}
            ></NextStep>
          </Next>
        </Content>
      </CenterContent>
    </Wrapper>
  );
};
export default WhiteBoard;

const Wrapper = styled.div`
  width: 90%;
  height: auto;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: -72px;
  padding: 32px 24px;
  @media (min-width: 1024px) {
    width: 70%;
    display: flex;
    align-items: center;
    padding: 16px;
    margin: 0 auto;
  }
`;
const CenterContent = styled.div`
  @media (min-width: 1024px) {
    width: 100%;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Content = styled.div`
  @media (min-width: 1024px) {
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Next = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    margin-top: 92px;
  }
`;

const Title = styled.h2`
  color: #022959;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  color: #9699aa;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 22px;
  @media (min-width: 1024px) {
    margin-bottom: 35px;
  }
`;
