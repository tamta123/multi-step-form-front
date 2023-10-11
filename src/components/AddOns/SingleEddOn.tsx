import styled from "styled-components";
// import CheckMark from "../../svg/CheckMark";

type PropsType = {
  name: string;
  description: string;
  price: string;
  frequency: string;
  onClick: (name: string) => void;
};

const SingleAddOn: React.FC<PropsType> = ({
  name,
  description,
  price,
  frequency,
  onClick,
}) => {
  return (
    <Card onClick={() => onClick(name)}>
      <Box>{/* <CheckMark /> */}</Box>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </div>
        <div>
          <Price>{price}</Price>
          <Frequency>{frequency}</Frequency>
        </div>
      </div>
    </Card>
  );
};

export default SingleAddOn;

const Card = styled.div`
  width: 295px;
  height: 62px;
  border-radius: 8px;
  border: 1px solid #d6d9e6;
  background: #fff;
  padding: 13px 16px 10px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const Box = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #9699aa;
  border-radius: 5px;
`;

const Name = styled.div`
  color: #022959;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Description = styled.p`
  color: #9699aa;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Price = styled.span`
  color: #483eff;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
const Frequency = styled.span`
  color: #483eff;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
