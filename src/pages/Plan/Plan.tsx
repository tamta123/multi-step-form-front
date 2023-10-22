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
import { PlanSchema } from "../../schemas";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/redux";

const Plan = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { payment_frequency, plan_choice } = useSelector(
    (state: RootState) => state.customer
  );

  const handleToggle = () => {
    dispatch(
      updateData({
        property: "payment_frequency",
        value: payment_frequency === "yearly" ? "monthly" : "yearly",
      })
    );
  };

  const getPrice = (planName: keyof typeof data) => {
    return payment_frequency === "yearly"
      ? data[planName].yearly_price
      : data[planName].monthly_price;
  };

  const selectPlan = (planName: any) => {
    console.log("Selecting plan:", planName);

    PlanSchema.validate({ plan_choice: planName })
      .then(() => {
        dispatch(updateData({ property: "plan_choice", value: planName }));
      })
      .catch((error) => {
        console.error("Validation error:", error);
      });
  };

  return (
    <Main>
      <WhiteBoard
        previousPage={"/"}
        onSubmit={() => navigate("/addOns")}
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      >
        <CardWrapper>
          <PlanCard
            name="arcade"
            price={getPrice("arcade")}
            frequency={payment_frequency === "yearly" ? "/yr" : "/mo"}
            freeService={
              payment_frequency === "yearly" ? "2 months free" : undefined
            }
            onClick={() => selectPlan("arcade")}
            selected={plan_choice === "arcade"}
          >
            <Arcade />
          </PlanCard>
          <PlanCard
            name="advanced"
            price={getPrice("advanced")}
            frequency={payment_frequency === "yearly" ? "/yr" : "/mo"}
            freeService={
              payment_frequency === "yearly" ? "2 months free" : undefined
            }
            onClick={() => selectPlan("advanced")}
            selected={plan_choice === "advanced"}
          >
            <Advanced />
          </PlanCard>
          <PlanCard
            name="pro"
            price={getPrice("pro")}
            frequency={payment_frequency === "yearly" ? "/yr" : "/mo"}
            freeService={
              payment_frequency === "yearly" ? "2 months free" : undefined
            }
            onClick={() => selectPlan("pro")}
            selected={plan_choice === "pro"}
          >
            <Pro />
          </PlanCard>
        </CardWrapper>
        <PaymentFrequency
          isYearlyBilling={payment_frequency !== "yearly"}
          handleToggle={handleToggle}
        />
      </WhiteBoard>
      <NextWrapper>
        <NextStep
          type="button"
          previousPage={"/"}
          onSubmit={() => navigate("/addOns")}
        />
      </NextWrapper>
    </Main>
  );
};
export default Plan;

const Main = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: 100vh;
    justify-content: center;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const NextWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
