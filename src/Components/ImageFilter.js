import React from "react";
import alimentação from "../../src/assets/images/alimentacao.svg";
import outros from "../../src/assets/images/outros.svg";
import saude from "../../src/assets/images/saude.svg";
import transporte from "../../src/assets/images/transporte.svg";
import utilidades from "../../src/assets/images/utilidades.svg";
import { Icone } from "./UI";

export default (type) => {
  const Images = {
    Restaurante: <Icone src={alimentação} alt="Restaurante" />,
    Utilidadades: <Icone src={utilidades} alt="Utilidades" />,
    Saude: <Icone src={saude} alt="Saúde" />,
    Transporte: <Icone src={transporte} alt="Transporte" />,
    default: <Icone src={outros} alt="Outros" />,
  };

  return Images[type] || Images.default;
};
