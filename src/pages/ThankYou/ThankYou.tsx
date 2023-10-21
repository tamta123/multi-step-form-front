import styled from "styled-components";
import ThankYouIcon from "../../svg/ThankYouIcon";
import { NavBar } from "../../layout";

const ThankYou = () => {
  return (
    <Wrapper>
      <NavBar></NavBar>
      <ThankYouWrapper>
        <ThankYouIcon />
        <div style={{ textAlign: "center" }}>
          <Title>Thank you!</Title>
          <Description>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </Description>
        </div>
      </ThankYouWrapper>
    </Wrapper>
  );
};

// const Main = styled.div`
//   @media (min-width: 768px) {
//     display: flex;
//     /* height: 100vh; */
//     justify-content: center;
//     margin: 0 auto;
//   }
// `;

const Wrapper = styled.div`
  width: 90%;
  height: auto;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: -75px;
  padding: 79px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 0 auto;
    padding: 0;
    justify-content: flex-start;
    gap: 0;
    width: 70%;
  }
`;

const ThankYouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
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
