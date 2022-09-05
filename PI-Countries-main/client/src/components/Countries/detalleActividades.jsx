import React from "react";

const Actividad = ({ actividades, countryName }) => {
  if (actividades && actividades.length > 0) {
    return (
      <div>
        <h3>Actividades Planeadas en {countryName}</h3>
        <table className={actividades}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Duracion</th>
              <th>Temporada</th>
              <th>Dificultad</th>
            </tr>
          </thead>
          <tbody>
            {actividades?.map((a) => (
              <tr key={a.id}>
                <td>{a.nombre}</td>
                <td>{a.duracion}</td>
                <td>{a.temporada}</td>
                <td>{a.dificultad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};
export default Actividad;
