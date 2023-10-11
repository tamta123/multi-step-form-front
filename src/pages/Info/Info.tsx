// import styled from "styled-components";

import { PersonalInfo } from "../../components/Info";
import { WhiteBoard } from "../../components/Mutual";

const Info = () => {
  return (
    <div>
      <WhiteBoard
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      >
        <PersonalInfo />
      </WhiteBoard>
    </div>
  );
};
export default Info;
