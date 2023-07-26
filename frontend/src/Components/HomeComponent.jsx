import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'


export default function HomeComponent() {

  const Comenzar = () => {
    const dificultadSeleccionada = document.getElementById("dificultad").value;

    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 6);

    if (dificultadSeleccionada === "intermedioservice") {
      window.location.href = "/prueba-intermedioservice";
    } else if (dificultadSeleccionada === "intermedio") {
      window.location.href = "/prueba-intermedio";
    } else if (dificultadSeleccionada === "dificil") {
      window.location.href = "/prueba-dificil";
    }
  };


  return (
    <div>
      <GlobalStyle />
      <HomeStyle>
        <h1 className="text-center">
          <b>
            {" "}
            <i>
              {" "}
              <u>¡Bienvenido a PyQuiz!</u>
            </i>
          </b>
        </h1>
        <h3 className="text-center">
          {" "}
          <b>
            Selecciona tu nivel de dificultad y comienza a resolver los
            desafíos.{" "}
          </b>
        </h3>
        <br></br>

        <div className="mode">
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
          <button type="button" class="btn btn-primary">
            Acceder
          </button>
        </div>
        <br></br>
      </HomeStyle>
    </div>
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

.mode{
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
`;
