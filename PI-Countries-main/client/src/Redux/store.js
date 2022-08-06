import reducer from "./reducer/reducer";
import { createStore, applyMiddleware, compose } from "redux";
import ThunkMiddlewere from "redux-thunk";

const composeEhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  reducer,
  composeEhancer(applyMiddleware(ThunkMiddlewere))
);
//store, es la fuente de la verdad. Representa el estado de la aplicación.
export default store;
