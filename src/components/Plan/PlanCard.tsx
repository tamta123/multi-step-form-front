import styled from "styled-components";

type PropsType = {
  name: string;
  price: any;
  frequency: string;
  freeService?: string;
  children: any;
  selected?: boolean;
  onClick: any;
};

const PlanCard: React.FC<PropsType> = ({
  name,
  price,
  frequency,
  freeService,
  children,
  selected,
  onClick,
}) => {
  return (
    <Card
      style={
        selected
          ? {
              borderRadius: "8px",
              border: "1px solid  #483EFF",
              background: " #F8F9FF",
            }
          : {}
      }
      onClick={onClick}
    >
      <div>{children}</div>
      <Wrapper>
        <OptionName>{name}</OptionName>
        <div>
          <Price>${price}</Price>
          <Frequency>{frequency}</Frequency>
        </div>
        {freeService ? <Free>{freeService}</Free> : null}
      </Wrapper>
    </Card>
  );
};

export default PlanCard;

const Card = styled.div`
  border-radius: 8px;
  border: 1px solid #d6d9e6;
  background: #fff;
  display: flex;
  gap: 14px;
  padding-top: 14px;
  padding-bottom: 18px;
  padding-left: 16px;
  align-items: center;
  height: 99px;
  cursor: pointer;
  @media (min-width: 768px) {
    height: 160px;
    flex-direction: column;
    width: 32%;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 20px;
    align-items: flex-start;
    justify-content: space-between;
    :hover {
      border: 1px solid #483eff;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionName = styled.div`
  color: #022959;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Price = styled.span`
  color: #9699aa;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
const Frequency = styled.span`
  color: #9699aa;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
const Free = styled.span`
  color: #022959;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
