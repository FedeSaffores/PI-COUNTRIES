import reducer from "./reducer/reducer";
import { createStore, applyMiddleware, compose } from "redux";
import ThunkMiddlewere from "redux-thunk";

const composeEhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  reducer,
  composeEhancer(applyMiddleware(ThunkMiddlewere))
);
//compose: Las funciones a combinar. Se espera que cada función acepte un único parámetro. El valor de devuelva va a
//ser usado como argumento a la función que este a su izquierda, y así.
//Todo lo que compose hace es permitirte escribir funciones transformadoras anidades fácilmente.
//store, es la fuente de la verdad. Representa el estado de la aplicación.
//Middlewere es el intermediario entre accions y el reducer.
//Thunk es un concepto de programación donde se utiliza una función
//para retrasar la evaluación o el cálculo de una operación.
//Redux thunk es un middlewere que le permite invocar a los creadores de acciones que devuelvan una funcion
//en ()=>{ } en vez de un objeto { }
export default store;
