//REDUCER, DETERMINA COMO DEBERA SER ACTUALIZADO EL STORE, EN FUNCION DE LAS ACCIONES.
const inicialState = {
  countries: [],
  actividades: [],
};
function reducer(state = inicialState, { type, payload }) {
  // es el reducer quien determina como deberá ser actualizado el estado basado en el action
  switch (type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: payload,
      };
    default:
      return state;
    //Una vez que un action es despachado, el store lo recibirá y lo enviará a los reducers,
    //los cuales, basado en la propiedad type, determinarán, si es necesario modificar el estado.
  }
}

export default reducer;
