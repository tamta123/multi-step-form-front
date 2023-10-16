import styled from "styled-components";

type PropsType = {
  title: string;
  description: string;
  children: any;
};

const WhiteBoard: React.FC<PropsType> = ({ title, description, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <div>{children}</div>
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
  margin-bottom: 22px;
`;
