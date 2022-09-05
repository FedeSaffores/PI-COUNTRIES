import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Pais from "./components/Pais";
import Intro from "./components/Intro";
import Formulario from "./components/Formulario";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>POR EL MUNDO</h1>
        <Switch>
          <Route path="/actividades">
            <Formulario />
          </Route>
          <Route path="/countries/:pais">
            <Pais />
          </Route>
          <Route path="/countries">
            <Home />
          </Route>
          <Route path="/">
            <Intro />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
