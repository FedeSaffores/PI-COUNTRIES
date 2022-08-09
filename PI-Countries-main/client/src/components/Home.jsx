import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import {
  getCountries,
  getName,
  ordenAlf,
  ordenAlfRev,
  ordPoblacion,
  ordPobRev,
} from "../Redux/actions/actions";
import "./Home.css";
import "./order/order";

function Home() {
  //Para despachar una acción son necesarios dos cosas, un referencia al dispatcher
  // y el objeto action que describe los cambios a realizar en el store.
  //Para recuperar el dispatcher contamos con el hook useDispatch:
  const dispatch = useDispatch();
  //con el useSelector sirve para registrar nuestros componentes y recibir actualizaciones del Store.
  const country = useSelector((state) => state.countries);
  //este recibe por parametro la sieguiente funcion y la cual a su vez recibe el estado general del store.
  //La misma funcion selecciona la seccion del Store que nos interesa. Cada vez que el Store cambien,
  // el hook actualizara los valores con los nuevos componentes, lo cual detonara un nuevo renderizado
  //del componente para reflejar los nuevos valores.
  const [page, setPage] = useState(0);
  const [busqueda, setBusqueda] = useState("");
  const [continent, setContinent] = useState("");

  const inputHandler = (e) => {
    setBusqueda(e.target.value);
  };
  const onClickHandler = () => {
    dispatch(getName(busqueda));
  };
  const homeHandler = () => {
    dispatch(getCountries());
  };
  useEffect(() => {
    //Se usa useEffect, porque queremos que react haga algo != de solamente mostrar elementos HTML
    dispatch(getCountries());
  }, [dispatch]);
  //El efecto primario de React es dibujar HTML en el DOM.  TAMBIEN HACE LLAMADAS HTTP
  //Y INTERACTUA CON EL NAVEGADOR.
  // Poner useEffect nos permite acceder a la variable y le indicamos a react que tiene que hacer algo,
  //luego de renderizarse

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="Input"
        autoComplete="off"
        onChange={inputHandler}
      />
      <button className="Search" onClick={onClickHandler}>
        Search
      </button>
      <button className="reset" onClick={homeHandler}>
        Reset
      </button>
      <button className="ordAlf" onClick={() => dispatch(ordenAlf())}>
        ORD ALF
      </button>
      <button className="ordAlf" onClick={() => dispatch(ordenAlfRev())}>
        ORDEN ALF REV
      </button>
      <button className="ordPob" onClick={() => dispatch(ordPoblacion())}>
        ORDEN POR MENOR POBLACION
      </button>
      <button className="ordPob" onClick={() => dispatch(ordPobRev())}>
        ORDEN POR MAYOR POBLACION
      </button>
      <button
        className="btn"
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
      >
        ANTERIOR
      </button>
      <button
        className="btn"
        onClick={() => setPage(page + 1)}
        disabled={country?.slice((page + 1) * 10).length === 0}
      >
        SIGUIENTE
      </button>
      <select
        onChange={(e) => {
          setContinent(e.target.value);
          setPage(0);
        }}
        defaultValue={""}
        className="ORDCONT"
      >
        <option value={""}>Todos los Paises</option>
        <option value={"North America"}>Norte America</option>
        <option value={"South America"}>Sur America</option>
        <option value={"Africa"}>Africa</option>
        <option value={"Europe"}>Europa</option>
        <option value={"Asia"}>Asia</option>
        <option value={"Oceania"}>Oceania</option>
      </select>
      {country
        ?.filter((e) => (continent !== "" ? e.continente === continent : true))
        .slice(page * 10, (page + 1) * 10)
        .map((e) => {
          return (
            <div key={e.ID}>
              <h2>
                <Link to={`/countries/${e.ID}`}>{e.nombre}</Link>
              </h2>
              <h2>{e.continente}</h2>
              <img src={e.img} alt={""} />
            </div>
          );
        })}
    </div>
  );
}

export default Home;
