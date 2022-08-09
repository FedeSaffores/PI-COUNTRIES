//Describen una intension  para cambiar el estado del Store.
import axios from "axios";
import {
  GET_COUNTRIES,
  GET_DETAIL,
  GET_NAME,
  ORD_ALF,
  ORD_ALF_REV,
  ORD_POB,
  ORD_POB_REV,
} from "./actionsName";

export function getCountries() {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/countries/");
    dispatch({ type: GET_COUNTRIES, payload: res.data });
  };
}

export function getDetail(id) {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:3001/countries/${id}`);
    dispatch({ type: GET_DETAIL, payload: res.data });
  };
}
export function getName(nombre) {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/countries?pais=${nombre}`
      );
      dispatch({ type: GET_NAME, payload: res.data });
    } catch (err) {
      throw err;
    }
  };
}
//Para despachar una acción, es necesario enviar un objeto que tenga al menos la propiedad type,
// la cual es utilizada por los reducers para identificar el cambio que se quiere realizar,
// además, es posible enviar cualquier otra propiedad para complementar la acción,
//el cual puede tener los nuevos datos para el store.
export function ordenAlf() {
  return {
    type: ORD_ALF,
  };
}
export function ordenAlfRev() {
  return {
    type: ORD_ALF_REV,
  };
}
export function ordPoblacion() {
  return {
    type: ORD_POB,
  };
}
export function ordPobRev() {
  return {
    type: ORD_POB_REV,
  };
}
