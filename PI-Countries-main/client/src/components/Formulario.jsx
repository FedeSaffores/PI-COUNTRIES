import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createActividad } from "../Redux/actions/actions";
import { useSelector } from "react-redux";
import { getName } from "../Redux/actions/actions";
import { Link } from "react-router-dom";
import "./Formulario.css";
const Formulario = () => {
  const countries = useSelector((state) => state.countries);
  const [inputName, setInputName] = useState("");
  const dispatch = useDispatch();

  const [formulario, setFormulario] = useState({
    nombre: "",
    dificultad: "1",
    duracion: "",
    temporada: "",
    countryID: [],
  });

  const stateReset = () => {
    setFormulario({
      nombre: "",
      dificultad: "1",
      duracion: "",
      temporada: "",
      countryID: [],
    });
    setInputName("");
  };
  const submitInput = (e) => {
    e.preventDefault();
    setInputName(e.target.value);
  };
  const setDataHandler = (e) => {
    e.preventDefault();
    let value = e.target.value;
    if (e.target.name === "countryID")
      value =
        inputName !== ""
          ? [...e.target.options]
              .filter((option) => option.selected)
              .map((x) => x.value)
              .concat(formulario.countryID)
          : [...e.target.options]
              .filter((option) => option.selected)
              .map((x) => x.value);
    setFormulario({
      ...formulario,
      [e.target.name]: value,
    });
    console.log(formulario.countryID, e.target.name, value);
  };
  useEffect(() => {
    dispatch(getName(inputName));
  }, [inputName]);

  const submitForm = (e) => {
    e.preventDefault();
    var form = true;
    if (formulario.nombre.length < 2 || !formulario.countryID.length >= 1) {
      form = false;
    }
    if (form) {
      dispatch(createActividad(formulario))
        .then(() => stateReset())
        .then(() => alert("Actividad Adherida"));
    } else {
      return alert("Llene los campos antes de crear la nueva actividad");
    }
    console.log(formulario);
  };
  return (
    <div>
      <div>
        <Link to={"/countries"} className="HOME">
          HOME
        </Link>
      </div>
      <p>Describa su Actividad</p>
      <form onSubmit={(e) => submitForm(e)} onReset={() => stateReset()}>
        <input
          className="Nombre"
          name="nombre"
          placeholder="Nombre de su actividad"
          value={formulario.name}
          onChange={setDataHandler}
        />
        <p>Seleccione la dificultad</p>
        <select
          className="Dificultad"
          name="dificultad"
          value={formulario.dificultad}
          onChange={setDataHandler}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p>Duracion de la actividad en Horas</p>
        <input
          className="Duracion"
          name="duracion"
          autoComplete="off"
          type="number"
          max={1000}
          min={1}
          value={formulario.duracion}
          onChange={setDataHandler}
        />
        <p>Seleccione la Temporada</p>
        <select
          className="Temporada"
          name="temporada"
          value={formulario.temporada}
          onChange={setDataHandler}
        >
          <option value="VERANO">Verano</option>
          <option value="OTOÑO">Otoño</option>
          <option value="INVIERNO">Invierno</option>
          <option value="PRIMAVERA">Primavera</option>
        </select>
        <br />
        <label>Selecione Pais</label>
        <br />
        <input
          className="Country"
          type="text"
          autoComplete="off"
          placeholder="find your country..."
          onChange={submitInput}
        />
        <br />
        <select
          className="Select"
          multiple
          name="countryID"
          onChange={setDataHandler}
          value={formulario.countryID}
          options={countries.map((e) => ({ value: e.ID, label: e.nombre }))}
        >
          {countries.map((e) => (
            <option value={e.ID} key={e.ID}>
              {e.nombre}
            </option>
          ))}
        </select>
        <br />
        <button className="b" type="submit">
          Add Activiti
        </button>
        <button className="c" type="reset">
          Reset Form
        </button>
      </form>
    </div>
  );
};

export default Formulario;
