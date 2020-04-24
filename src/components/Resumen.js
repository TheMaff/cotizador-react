import React from "react";

const Resumen = ({ datos }) => {
  // extraer de datos
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") return null;

  return (
    <div>
      <h2> Resumen de cotizacion </h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>Año: {year}</li>
        <li>Plan: {plan}</li>
      </ul>
    </div>
  );
};
export default Resumen;
