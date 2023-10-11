import { WhiteBoard } from "../../components/Mutual";
import { PlanCard } from "../../components/Plan";
import PaymentFrequency from "../../components/Plan/PaymentFrequency";
import Advanced from "../../svg/Advanced";
import Arcade from "../../svg/Arcade";
import Pro from "../../svg/Pro";
import styled from "styled-components";
import data from "../../Data.json";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../../store/customerSlice";

const Plan = () => {
  const [isYearlyBilling, setIsYearlyBilling] = useState(true);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsYearlyBilling((prev) => !prev);
    dispatch(updateData(isYearlyBilling ? "yearly" : "monthly"));
    console.log(isYearlyBilling);
  };

  const getPrice = (planName) => {
    return isYearlyBilling
      ? data[planName].yearly_price
      : data[planName].monthly_price;
  };

  return (
    <WhiteBoard
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <CardWrapper>
        <PlanCard
          name="Arcade"
          price={getPrice("Arcade")}
          frequency={isYearlyBilling ? "/yr" : "/mo"}
          freeService={isYearlyBilling ? "2 months free" : undefined}
        >
          <Arcade />
        </PlanCard>
        <PlanCard
          name="Advanced"
          price={getPrice("Advanced")}
          frequency={isYearlyBilling ? "/yr" : "/mo"}
          freeService={isYearlyBilling ? "2 months free" : undefined}
        >
          <Advanced />
        </PlanCard>
        <PlanCard
          name="Pro"
          price={getPrice("Pro")}
          frequency={isYearlyBilling ? "/yr" : "/mo"}
          freeService={isYearlyBilling ? "2 months free" : undefined}
        >
          <Pro />
        </PlanCard>
      </CardWrapper>
      <PaymentFrequency
        handleToggle={handleToggle}
        isYearlyBilling={isYearlyBilling}
      />
    </WhiteBoard>
  );
};
export default Plan;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;
