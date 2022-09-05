import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Pais.css";
function Pais() {
  const { pais } = useParams();
  const [country, setCountry] = useState();
  useEffect(() => {
    fetch(`http://localhost:3001/countries/${pais}`)
      .then((res) => res.json())
      .then((res) => setCountry(res));
  }, [pais, setCountry]);
  if (!country) return null;
  return (
    <div>
      <Link className="LinkCountry" to="/countries">
        Volver a Home
      </Link>

      <h3 className="pais">{country.nombre}</h3>
      <img src={country.img} alt={country.nombre} />
      <div className="country">
        <h3>ID = {country.ID}</h3>
        <h3>CAPITAL={country.capital}</h3>
        <h3>AREA = {country.area}</h3>
        <h3>SUBREGION = {country.subregion}</h3>
        <h3>POBLACION ={country.poblacion}</h3>
      </div>
      <h3></h3>
      <h3 className="actividades">Actividades</h3>
      <table className="tabla">
        <thead className="elementosTabla">
          <th>Actividad </th>
          <th>Duracion</th>
          <th>Temporada</th>
          <th>Dificulad</th>
        </thead>
        <tbody>
          {country.Actividades.map((e) => (
            <tr className="Actividad" key={e.nombre}>
              <td>{e.nombre}</td>
              <td>{e.duracion}</td>
              <td>{e.temporada}</td>
              <td>{e.dificultad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Pais;
