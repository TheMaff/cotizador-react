import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  color: #fff;
  margin-top: 2rem;
  padding: 1rem 0;
  text-align: center;
  text-transform: uppercase;
`;

const TextoCotizacion = styled.p`
  color: #00838f;
  padding: 1rem 0;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

const ResultadoCotizacion = styled.p`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  positon: relative;
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TransitionGroup component="p" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  );
};
export default Resultado;
