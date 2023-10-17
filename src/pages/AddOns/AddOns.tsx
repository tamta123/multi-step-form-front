import { NextStep, WhiteBoard } from "../../components/Mutual";
import { SingleAddOn } from "../../components/AddOns";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../store/customerSlice";
import data from "../../Data.json";

const AddOns = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.customer);

  const getPrice = (planName) => {
    return formData.payment_frequency === "Yearly"
      ? data[planName].add_ons[0].yearly_price
      : data[planName].add_ons[0].monthly_price;
  };

  const handleAddOnSelection = (addOnName) => {
    console.log(formData[addOnName]);
    dispatch(
      updateData({
        property: addOnName,
        value: !formData[addOnName],
      })
    );
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
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      >
        <Wrapper>
          <SingleAddOn
            name="Online service"
            description="Access to multiplayer games"
            price={getPrice("arcade")}
            frequency={formData.payment_frequency === "Yearly" ? "/yr" : "/mo"}
            onClick={() => handleAddOnSelection("online_service")}
            selected={formData.online_service}
          ></SingleAddOn>
          <SingleAddOn
            name="Larger storage"
            description="Extra 1TB of cloud save"
            price={getPrice("arcade")}
            frequency={formData.payment_frequency === "Yearly" ? "/yr" : "/mo"}
            onClick={() => handleAddOnSelection("larger_storage")}
            selected={formData.larger_storage}
          ></SingleAddOn>
          <SingleAddOn
            name="Customizable profile"
            description="Custom theme on your profile"
            price={getPrice("arcade")}
            frequency={formData.payment_frequency === "Yearly" ? "/yr" : "/mo"}
            onClick={() => handleAddOnSelection("customizable_profile")}
            selected={formData.customizable_profile}
          ></SingleAddOn>
        </Wrapper>
      </WhiteBoard>
      <NextStep />
    </div>
  );
};

export default AddOns;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
