import React from "react";
import { CustomerChoice } from "../../components/Finish";
import { NextStep, WhiteBoard } from "../../components/Mutual";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Finish = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.customer);

  const sendPostRequest = async () => {
    try {
      console.log(formData);

      const response = await axios.post(
        "https://multi-step-form-production.up.railway.app/api/user_choice",
        formData
      );
      console.log("POST request response:", response.data);
      navigate("/ThankYou");
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
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
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      >
        <CustomerChoice />
      </WhiteBoard>
      <NextStep onSubmit={sendPostRequest} />
    </div>
  );
};

export default Finish;
