import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { getCountries } from "../Redux/actions/actions";
import "./Home.css";

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

  useEffect(() => {
    //Se usa useEffect, porque queremos que react haga algo != de solamente mostrar elementos HTML
    dispatch(getCountries());
  }, []);
  //El efecto primario de React es dibujar HTML en el DOM.  TAMBIEN HACE LLAMADAS HTTP
  //Y INTERACTUA CON EL NAVEGADOR.
  // Poner useEffect nos permite acceder a la variable y le indicamos a react que tiene que hacer algo,
  //luego de renderizarse

  return (
    <div>
      {country &&
        country.map((e) => {
          return (
            <div key={e.ID}>
              <h2>{e.nombre}</h2>
              <h2>{e.continente}</h2>
              <img src={e.img} alt={""} />
            </div>
          );
        })}
    </div>
  );
}

export default Home;
