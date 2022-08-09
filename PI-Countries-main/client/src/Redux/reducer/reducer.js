import { ordAlf, ordPobl } from "../../components/order/order";

//REDUCER, DETERMINA COMO DEBERA SER ACTUALIZADO EL STORE, EN FUNCION DE LAS ACCIONES.
const inicialState = {
  countries: [],
  actividades: [],
};
function reducer(state = inicialState, { type, payload }) {
  // es el reducer quien determina como deberá ser actualizado el estado basado en el action
  switch (type) {
    case "GET_COUNTRIES": {
      return {
        ...state,
        countries: payload,
      };
    }

    //Una vez que un action es despachado, el store lo recibirá y lo enviará a los reducers,
    //los cuales, basado en la propiedad type, determinarán, si es necesario modificar el estado.

    case "GET_DETAIL": {
      return {
        ...state,
        countryDetail: payload,
      };
    }
    case "GET_NAME": {
      return {
        ...state,
        countries: payload,
      };
    }
    case "ORD_ALF": {
      return {
        ...state,
        countries: state.countries.slice().sort(ordAlf),
      };
    }
    case "ORD_ALF_REV": {
      return {
        ...state,
        countries: state.countries.slice().sort(ordAlf).reverse(),
      };
    }
    case "ORD_POB": {
      return {
        ...state,
        countries: state.countries.slice().sort(ordPobl),
      };
    }
    case "ORD_POB_REV": {
      return {
        ...state,
        countries: state.countries.slice().sort(ordPobl).reverse(),
      };
    }
    default:
      return state;
  }
}

export default reducer;
