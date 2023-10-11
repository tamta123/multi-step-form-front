import { WhiteBoard } from "../../components/Mutual";
import { SingleAddOn } from "../../components/AddOns";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updateData } from "../../store/customerSlice";

const AddOns = () => {
  const dispatch = useDispatch();

  const handleAddOnSelection = (name: string) => {
    dispatch(updateData(name));
    console.log(name);
  };

  return (
    <WhiteBoard
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <Wrapper>
        <SingleAddOn
          name="Online service"
          description="Access to multiplayer games"
          price="+$1"
          frequency="/mo"
          onClick={() => handleAddOnSelection("Online service")}
        ></SingleAddOn>
        <SingleAddOn
          name="Larger storage"
          description="Extra 1TB of cloud save"
          price="+$2"
          frequency="/mo"
          onClick={() => handleAddOnSelection("Larger storage")}
        ></SingleAddOn>
        <SingleAddOn
          name="Customizable profile"
          description="Custom theme on your profile"
          price="+$2"
          frequency="/mo"
          onClick={() => handleAddOnSelection("Customizable profile")}
        ></SingleAddOn>
      </Wrapper>
    </WhiteBoard>
  );
};

export default AddOns;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
