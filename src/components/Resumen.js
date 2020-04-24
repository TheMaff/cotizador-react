import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
  li {
    text-transform: capitalize;
    span {
      font-weight: bold;
    }
  }
`;

const Resumen = ({ datos }) => {
  // extraer de datos
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") return null;

  return (
    <ContenedorResumen>
      <h2> Resumen de cotizacion </h2>
      <ul>
        <li>
          <span> Marca: </span> {marca}
        </li>
        <li>
          <span> Año: </span> {year}
        </li>
        <li>
          <span> Plan: </span> {plan}
        </li>
      </ul>
    </ContenedorResumen>
  );
};
Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
};
export default Resumen;
