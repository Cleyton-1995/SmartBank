import React from "react";
import alimentação from "../../src/assets/images/alimentacao.svg";
import outros from "../../src/assets/images/outros.svg";
import saude from "../../src/assets/images/saude.svg";
import transporte from "../../src/assets/images/transporte.svg";
import utilidades from "../../src/assets/images/utilidades.svg";
import { IconeTema } from "./UI";

export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentação} alt="Restaurante" />,
    Utilidadades: <IconeTema src={utilidades} alt="Utilidades" />,
    Saude: <IconeTema src={saude} alt="Saúde" />,
    Transporte: <IconeTema src={transporte} alt="Transporte" />,
    default: <IconeTema src={outros} alt="Outros" />,
  };

  return Images[type] || Images.default;
};
