import styled from "styled-components";
import Routing from "./Routing";
import { Header } from "./layout";

function App() {
  return (
    <Main>
      <Div>
        <Header />
      </Div>
      <Routing />
    </Main>
  );
}

export default App;

const Main = styled.div`
  background: #eff5ff;
  height: 100vh;
  width: 100vw;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
const Div = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;
