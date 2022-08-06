//Describen una intension  para cambiar el estado del Store.
import axios from "axios";
import { GET_COUNTRIES } from "./actionsName";

export function getCountries() {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/countries/");
    dispatch({ type: GET_COUNTRIES, payload: res.data });
  };
}

//Para despachar una acción, es necesario enviar un objeto que tenga al menos la propiedad type,
// la cual es utilizada por los reducers para identificar el cambio que se quiere realizar,
// además, es posible enviar cualquier otra propiedad para complementar la acción,
//el cual puede tener los nuevos datos para el store.
