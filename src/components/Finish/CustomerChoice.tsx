import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import data from "../../Data.json";

const CustomerChoice = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.customer);
  const price =
    formData.payment_frequency === "Yearly"
      ? data[formData.plan_choice].yearly_price
      : data[formData.plan_choice].monthly_price;

  const getPrice = (planName) => {
    return formData.payment_frequency === "Yearly"
      ? data[planName].add_ons[0].yearly_price
      : data[planName].add_ons[0].monthly_price;
  };

  //   console.log(selectedAddOn);

  return (
    <div>
      <Wrapper>
        <PlanChoice>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <Name>
              <span>
                {formData.plan_choice === "arcade"
                  ? "Arcade"
                  : formData.plan_choice === "advance"
                  ? "Advance"
                  : "Pro"}
              </span>
              <span>
                {formData.payment_frequency === "Yearly"
                  ? "(Yearly)"
                  : "(Monthly)"}
              </span>
            </Name>
            <Change>Change</Change>
          </div>
          <PriceDiv>
            <span>{price}</span>
            <span>
              {formData.payment_frequency === "Yearly" ? "/yr" : "/mo"}
            </span>
          </PriceDiv>
        </PlanChoice>
        <AddOnsWrapper>
          {formData.online_service === true && (
            <AddOns>
              <div>Online service</div>
              <PriceInfo>
                <span>+{getPrice("arcade")}</span>
                <span>
                  {formData.payment_frequency === "Yearly" ? "/yr" : "/mo"}
                </span>
              </PriceInfo>
            </AddOns>
          )}
          {formData.larger_storage === true && (
            <AddOns>
              <div>Larger Storage</div>
              <PriceInfo>
                <span>+{getPrice("arcade")}</span>
                <span>
                  {formData.payment_frequency === "Yearly" ? "/yr" : "/mo"}
                </span>
              </PriceInfo>
            </AddOns>
          )}
          {formData.customizable_profile === true && (
            <AddOns>
              <div>Customizable Profile</div>
              <PriceInfo>
                <span>+{getPrice("arcade")}</span>
                <span>
                  {formData.payment_frequency === "Yearly" ? "/yr" : "/mo"}
                </span>
              </PriceInfo>
            </AddOns>
          )}
        </AddOnsWrapper>
        <div></div>
      </Wrapper>
      <TotalWrapper>
        <Total>
          Total
          {formData.payment_frequency === "Yearly"
            ? "(per year)"
            : "(per month)"}
        </Total>
      </TotalWrapper>
    </div>
  );
};

export default CustomerChoice;

const Wrapper = styled.div`
  border-radius: 8px;
  background: #f8f9ff;
  height: auto;
  padding: 16px;
`;

const PlanChoice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(150, 153, 170, 0.2043);
  padding-bottom: 12px;
`;

const Name = styled.div`
  color: #022959;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const PriceDiv = styled.div`
  color: #022959;
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;
const Change = styled.span`
  color: #9699aa;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration-line: underline;
`;

const AddOns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9699aa;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const AddOnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 12px;
`;

const PriceInfo = styled.div`
  color: #022959;
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const TotalWrapper = styled.div`
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
`;
const Total = styled.span`
  color: #9699aa;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
