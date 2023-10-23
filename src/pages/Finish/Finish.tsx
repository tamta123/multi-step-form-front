import { CustomerChoice } from "../../components/Finish";
import { NextStep, WhiteBoard } from "../../components/Mutual";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { RootState } from "../../store/redux";
import { useState } from "react";

const Finish = () => {
  const navigate = useNavigate();
  const formData = useSelector((state: RootState) => state.customer);
  const [error, setError] = useState<string>("");
  const sendPostRequest = async () => {
    try {
      const response = await axios.post(
        "https://multi-step-form-production.up.railway.app/api/user_choice",
        formData
      );
      console.log("POST request response:", response.data);
      navigate("/thankYou");
    } catch (error: any) {
      if (error.response.status === 400 && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        console.error("Error sending POST request:", error);
        setError("An error occurred while submitting your choice.");
      }
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
        {error && <ErrorMessage>{error}</ErrorMessage>}{" "}
      </WhiteBoard>
      <NextWrapper>
        <NextStep
          type={"button"}
          previousPage={"/addOns"}
          onSubmit={sendPostRequest}
        />
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

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 16px;
  margin-top: 10px;
`;
