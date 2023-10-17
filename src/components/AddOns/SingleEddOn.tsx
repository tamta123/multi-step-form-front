import styled from "styled-components";
import CheckMark from "../../svg/CheckMark";

type PropsType = {
  name: string;
  description: string;
  price: string;
  frequency: string;
  onClick: (name: string) => void;
  selected: boolean;
};

const SingleAddOn: React.FC<PropsType> = ({
  name,
  description,
  price,
  frequency,
  onClick,
  selected,
}) => {
  console.log(selected);
  return (
    <Card selected={selected}>
      <Box selected={selected} onClick={() => onClick(name)}>
        {selected && <CheckMark />}
      </Box>
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
          <Name selected={selected}>{name}</Name>
          <Description>{description}</Description>
        </div>
        <div>
          <Price selected={selected}>{price}</Price>
          <Frequency>{frequency}</Frequency>
        </div>
      </div>
    </Card>
  );
};

export default SingleAddOn;

const Card = styled.div<{ selected: boolean }>`
  width: 295px;
  height: 62px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.selected ? " #483EFF" : "#d6d9e6")};
  background: ${(props) => (props.selected ? " #F8F9FF" : "#fff")};
  padding: 13px 16px 10px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;

const Box = styled.div<{ selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.selected ? "#483EFF" : "#d6d9e6")};
  background-color: ${(props) => (props.selected ? "#483EFF" : "")};
`;

const Name = styled.div<{ selected: boolean }>`
  color: ${(props) => (props.selected ? "#483EFF)" : "#022959")};
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => (props.selected ? "bold" : "500")};
  line-height: normal;
`;

const Description = styled.p`
  color: #9699aa;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Price = styled.span<{ selected: boolean }>`
  color: ${(props) => (props.selected ? " #483EFF" : "#483eff")};
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Frequency = styled.span`
  color: #483eff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
