import { CustomerChoice } from "../../components/Finish";
import { NextStep, WhiteBoard } from "../../components/Mutual";

const Finish = () => {
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
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      >
        <CustomerChoice />
      </WhiteBoard>
      <NextStep />
    </div>
  );
};
export default Finish;
