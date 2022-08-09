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
      <button>
        <div>
          <Link to="/countries">Volver a Home</Link>
        </div>
      </button>
      <h3>PAIS : {country.nombre}</h3>
      <img src={country.img} alt={country.nombre} />
      <h3>ID : {country.ID}</h3>
      <h3>CAPITAL : {country.capital}</h3>
      <h3>AREA : {country.area}</h3>
      <h3>SUBREGION : {country.subregion}</h3>
      <h3>POBLACION :{country.poblacion}</h3>
      <h3>Actividades</h3>
      <table>
        <thead>
          <th>Actividad</th>
          <th>Duracion</th>
          <th>Temporada</th>
          <th>Dificultad</th>
        </thead>
      </table>
    </div>
  );
}
export default Pais;
