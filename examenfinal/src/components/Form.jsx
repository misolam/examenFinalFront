import "./module.css";
import { useContext } from "react";
import { ThemeDataContext } from "../contexts/ThemeDataContext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [datosSubmited, setDatosSubmited] = useState(false);
  const [nombreEnviado, setNombreEnviado] = useState("");
  const [error, setError] = useState("");

  function handleChangeNombre(event) {
    setInputName(event.target.value);
  }

  function handleChangeEmail(event) {
    setInputEmail(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (inputName.length <= 5 || !inputEmail.includes("@")) {
      setError("Por favor verifique su información nuevamente");
      setDatosSubmited(false);
      return;
    }

    const datos = {
      nombre: inputName,
      email: inputEmail,
    };
    setError("");
    setDatosSubmited(true);
    setNombreEnviado(inputName);
    setInputName("");
    setInputEmail("");
  }

  console.log(inputName, inputEmail);

  return (
    <div className="form-container">

  
    <form onSubmit={handleSubmit} className="my-form">
      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={inputName}
        onChange={handleChangeNombre}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="email"
        value={inputEmail}
        onChange={handleChangeEmail}
      />
      <br />
      <button type="submit">Enviar</button>
      {datosSubmited && (
        <p>Gracias {nombreEnviado} los datos han sido enviados correctamente</p>
      )}
      {error && <p className="error">{error}</p>}
    </form>
    </div>
  );
}
export default Form;
