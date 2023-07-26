import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function ResultadosComponent() {
  const Comenzar = () => {
    const dificultadSeleccionada = document.getElementById("dificultad").value;

    localStorage.setItem("puntaje", 1);
    localStorage.setItem("restantes", 6);

    if (dificultadSeleccionada === "facil") {
      window.location.href = "/prueba-facil";
    } else if (dificultadSeleccionada === "intermedio") {
      window.location.href = "/prueba-intermedio";
    } else if (dificultadSeleccionada === "dificil") {
      window.location.href = "/prueba-dificil";
    }
  };

  const [puntaje, setPuntaje] = useState(
    localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
  );

  const [segundos, setSegundos] = useState(
    localStorage.getItem("segundos") ? localStorage.getItem("segundos") : 0
  );

  const [minutos, setMinutos] = useState(
    localStorage.getItem("minutos") ? localStorage.getItem("minutos") : 0
  );

  const [horas, setHoras] = useState(
    localStorage.getItem("horas") ? localStorage.getItem("horas") : 0
  );

  return (
    <>
      <GlobalStyle />
      <HomeStyle>
        <br></br>
        <div className="resultados">
          <h1>
            <b>
              <u>Tu calificación es: {puntaje}.0/ 7.0</u>
            </b>
          </h1>
          <h1>Tu tiempo fue de:</h1>
          <h1>
            <b>
              {horas} horas, {minutos} minutos y {segundos} segundos.
            </b>
          </h1>
          {puntaje == 7 ? (
            <h1>¡Felicidades! Has completado el desafio con éxito.</h1>
          ) : (
            <h1>¡Puedes mejorar! Sigue intentandolo.</h1>
          )}
        </div>
        <br></br>
        <div className="facil">
          <h2>
            <b>Seleccione un Modo</b>
          </h2>
          <h3>
            Para principiantes en Python que quieren sumergirse en el mundo de la
            programación y aprender con desafíos básicos y rápidos.
          </h3>
          <select id="dificultad" className="form-select">
            <option value="facil">Fácil</option>
            <option value="intermedio">Intermedio</option>
            <option value="dificil">Difícil</option>
          </select>
          <br/>
          <button type="button" className="btn btn-primary" onClick={Comenzar}>
            Comenzar
          </button>
        </div>


        <br></br>
        <div className="nueva-pregunta">
          <h2>
            <b>Agregar un nuevo desafio</b>
          </h2>
          <h3>
            ¿Has creado un desafio y quieres ver como otros se enfrentan a el?
            Accede a esta opción para agregar a un nuevo desafio.
          </h3>
          <button type="button" className="btn btn-primary">
            Acceder
          </button>
        </div>
        <br></br>
      </HomeStyle>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
body {
    background-color: #255b94;
}
`;

const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;

}

.facil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.resultados{
    padding-top: 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #0F889E;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.dificil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.medio{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.nueva-pregunta{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}
.texto-resultados{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    width: 80%;
    margin: auto;
    padding: 20px;
`;
