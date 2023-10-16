import styled from "styled-components";
import ThankYouIcon from "../../svg/ThankYouIcon";

const ThankYou = () => {
  return (
    <Wrapper>
      <ThankYouIcon />
      <div style={{ textAlign: "center" }}>
        <Title>Thank you!</Title>
        <Description>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </Description>
      </div>
    </Wrapper>
  );
};

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
