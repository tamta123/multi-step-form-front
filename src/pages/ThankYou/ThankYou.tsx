import styled from "styled-components";
import ThankYouIcon from "../../svg/ThankYouIcon";
import { NavBar } from "../../layout";

const ThankYou = () => {
  return (
    <Div>
      <Wrapper>
        <NavBar></NavBar>
        <ThankYouWrapper>
          <ThankYouDiv>
            <ThankYouIcon />
            <div style={{ textAlign: "center" }}>
              <Title>Thank you!</Title>
              <Description>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </Description>
            </div>
          </ThankYouDiv>
        </ThankYouWrapper>
      </Wrapper>
    </Div>
  );
};

const Div = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: -75px;
  padding: 79px 24px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    padding: 16px;
    gap: 0;
    width: 70%;
  }
`;

const ThankYouWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const ThankYouDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media (min-width: 768px) {
    width: 60%;
  }
`;

const Title = styled.h2`
  color: #022959;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #9699aa;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
`;

export default ThankYou;
