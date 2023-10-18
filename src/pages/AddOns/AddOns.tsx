import { NextStep, WhiteBoard } from "../../components/Mutual";
import { SingleAddOn } from "../../components/AddOns";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../store/customerSlice";
import data from "../../Data.json";
import { useNavigate } from "react-router-dom";

const AddOns = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.customer);

  const getPrice = (planName, index) => {
    console.log(data[planName].add_ons);

    return formData.payment_frequency === "yearly"
      ? data[planName].add_ons[index].yearly_price
      : data[planName].add_ons[index].monthly_price;
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
        height: "500px",
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
            price={getPrice("arcade", 0)}
            frequency={formData.payment_frequency === "yearly" ? "/yr" : "/mo"}
            onClick={() => handleAddOnSelection("online_service")}
            selected={formData.online_service}
          ></SingleAddOn>
          <SingleAddOn
            name="Larger storage"
            description="Extra 1TB of cloud save"
            price={getPrice("arcade", 1)}
            frequency={formData.payment_frequency === "yearly" ? "/yr" : "/mo"}
            onClick={() => handleAddOnSelection("larger_storage")}
            selected={formData.larger_storage}
          ></SingleAddOn>
          <SingleAddOn
            name="Customizable profile"
            description="Custom theme on your profile"
            price={getPrice("arcade", 2)}
            frequency={formData.payment_frequency === "yearly" ? "/yr" : "/mo"}
            onClick={() => handleAddOnSelection("customizable_profile")}
            selected={formData.customizable_profile}
          ></SingleAddOn>
        </Wrapper>
      </WhiteBoard>
      <NextStep previousPage={"/AddOns"} onSubmit={() => navigate("/Finish")} />
    </div>
  );
};

export default AddOns;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
