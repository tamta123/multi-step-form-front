import { NextStep, WhiteBoard } from "../../components/Mutual";
import { PlanCard } from "../../components/Plan";
import PaymentFrequency from "../../components/Plan/PaymentFrequency";
import Advanced from "../../svg/Advanced";
import Arcade from "../../svg/Arcade";
import Pro from "../../svg/Pro";
import styled from "styled-components";
import data from "../../Data.json";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../store/customerSlice";

const Plan = () => {
  const dispatch = useDispatch();
  const { payment_frequency, plan_choice } = useSelector(
    (state) => state.customer
  );

  const handleToggle = () => {
    dispatch(
      updateData({
        property: "payment_frequency",
        value: payment_frequency === "Yearly" ? "Monthly" : "Yearly",
      })
    );
  };

  const getPrice = (planName) => {
    return payment_frequency === "Yearly"
      ? data[planName].yearly_price
      : data[planName].monthly_price;
  };

  const selectPlan = (planName) => {
    console.log("Selecting plan:", planName);
    dispatch(updateData({ property: "plan_choice", value: planName }));
  };

  return (
    <div
      style={{
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <WhiteBoard
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      >
        <CardWrapper>
          <PlanCard
            name="Arcade"
            price={getPrice("Arcade")}
            frequency={payment_frequency === "Yearly" ? "/yr" : "/mo"}
            freeService={
              payment_frequency === "Yearly" ? "2 months free" : undefined
            }
            onClick={() => selectPlan("Arcade")}
            selected={plan_choice === "Arcade"}
          >
            <Arcade />
          </PlanCard>
          <PlanCard
            name="Advanced"
            price={getPrice("Advanced")}
            frequency={payment_frequency === "Yearly" ? "/yr" : "/mo"}
            freeService={
              payment_frequency === "Yearly" ? "2 months free" : undefined
            }
            onClick={() => selectPlan("Advanced")}
            selected={plan_choice === "Advanced"}
          >
            <Advanced />
          </PlanCard>
          <PlanCard
            name="Pro"
            price={getPrice("Pro")}
            frequency={payment_frequency === "Yearly" ? "/yr" : "/mo"}
            freeService={
              payment_frequency === "Yearly" ? "2 months free" : undefined
            }
            onClick={() => selectPlan("Pro")}
            selected={plan_choice === "Pro"}
          >
            <Pro />
          </PlanCard>
        </CardWrapper>
        <PaymentFrequency handleToggle={handleToggle} />
      </WhiteBoard>
      <NextStep />
    </div>
  );
};
export default Plan;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;
