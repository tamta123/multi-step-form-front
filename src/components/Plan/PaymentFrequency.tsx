import styled from "styled-components";

type PaymentFrequencyProps = {
  handleToggle: () => void;
  isYearlyBilling: boolean;
};

const PaymentFrequency: React.FC<PaymentFrequencyProps> = ({
  handleToggle,
  isYearlyBilling,
}) => {
  return (
    <Container>
      <Paragraph>Yearly</Paragraph>
      <SwitchLabel htmlFor="billing">
        <HiddenCheckbox
          type="checkbox"
          id="billing"
          checked={isYearlyBilling}
          onChange={handleToggle}
        />
        <ToggleSlider />
      </SwitchLabel>
      <Paragraph>Monthly</Paragraph>
    </Container>
  );
};

export default PaymentFrequency;

const Container = styled.div`
  width: 295px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  background: #f8f9ff;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  color: #022959;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SwitchLabel = styled.label`
  display: inline-block;
  width: 40px;
  height: 20px;
  background: #cfd8ef;
  border-radius: 15px;
  position: relative;
  cursor: pointer;

  input {
    opacity: 0;
  }
`;

const HiddenCheckbox = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ToggleSlider = styled.span`
  position: absolute;
  border-radius: 25px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.2s ease;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    background: #ffffff;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    left: 3px;
    top: 3px;
  }

  ${SwitchLabel}:hover & {
    background-color: rgba(2, 41, 89, 1);
  }

  ${HiddenCheckbox}:checked + & {
    background-color: rgba(2, 41, 89, 1);
    &::before {
      transform: translateX(21px);
    }
  }
`;
