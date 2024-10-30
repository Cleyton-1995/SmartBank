import React from "react";

import Cabecalho from "./Components/Cabecalho";
import  { ContainerRapper } from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <ContainerRapper />
    </>
  );
}

export default App;
