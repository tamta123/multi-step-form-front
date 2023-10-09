import styled from "styled-components";
import Routing from "./Routing";
import { Header } from "./layout";

function App() {
  return (
    <Main>
      <Header />
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
