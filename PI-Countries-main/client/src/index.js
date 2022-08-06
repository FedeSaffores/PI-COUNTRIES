import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  //Con el provider, hacemos que nuestro  componente se registre al Store
  // con la intension de que reciban las actualizaciones en caso de que alguien  actualice el store.
  //El Provider es importante por que es el componente al cual se registran los componentes para
  //recibir las actualizaciones cuando el store cambie, es por este motivo que cualquier componente
  //que quiera registrarce al store, tendrá que ser descendiente de Provider.
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
