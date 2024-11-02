import React from "react";

import Cabecalho from "./Components/Cabecalho";
import { ContainerRapper } from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaEscuro, temaClaro } from "./Components/UI/temas";

function App() {
  return (
    <ThemeProvider theme={{temaEscuro, temaClaro}}>
      <GlobalStyle />
      <Cabecalho />
      <ContainerRapper />
    </ThemeProvider>
  );
}

export default App;
