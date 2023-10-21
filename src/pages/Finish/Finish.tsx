import React from "react";
import { CustomerChoice } from "../../components/Finish";
import { NextStep, WhiteBoard } from "../../components/Mutual";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";

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
      navigate("/thankYou");
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  return (
    <Main>
      <WhiteBoard
        onSubmit={sendPostRequest}
        previousPage={"/addOns"}
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      >
        <CustomerChoice />
      </WhiteBoard>
      <NextWrapper>
        <NextStep previousPage={"/addOns"} onSubmit={sendPostRequest} />
      </NextWrapper>
    </Main>
  );
};

export default Finish;

const Main = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: 100vh;
    justify-content: center;
  }
`;

const NextWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
