import styled from "styled-components";
import Routing from "./Routing";

function App() {
  return (
    <Main>
      <Routing />
    </Main>
  );
}

export default App;

const Main = styled.div`
  background: #eff5ff;
  height: 100%;
  width: 100%;
`;
