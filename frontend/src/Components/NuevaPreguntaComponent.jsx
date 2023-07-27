import React, { Component, useState, useCallback } from "react";
import AceEditor from "react-ace";
import axios from 'axios';

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'


export default function NuevaPreguntaComponent() {
  const [code, setCode] = useState("");
  const Comenzar = () => {
    const dificultadSeleccionada = document.getElementById("dificultad").value;

    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 6);
  }
  const [respuesta, setRespuesta] = useState("");
  const [enunciado, setEnunciado] = useState("");

  const AgregarPregunta = (enunciado, pregunta, respuesta, dificultad) => {
    const urlBase = "http://localhost:8080";

    let endpoint = "";

    if (dificultad === "Fácil") {
      endpoint = "/facil";
    } else if (dificultad === "Intermedio") {
      endpoint = "/intermedio";
    } else if (dificultad === "Difícil") {
      endpoint = "/dificil";
    }

    return axios.post(`${urlBase}${endpoint}`, {
      enunciado: enunciado,
      codigo: pregunta,
      respuesta: respuesta });
  };

  const manejarAgregar = () => {
    const dificultadSeleccionada = document.getElementById("dificultad").value;
    AgregarPregunta(enunciado, code, respuesta, dificultadSeleccionada)
        .then(response => {
          console.log("Pregunta agregada con éxito:", response.data);
        })
        .catch(error => {
          console.error("Error al agregar la pregunta:", error);
        });
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
            Selecciona tu nivel de dificultad y comienza los
            desafíos.{" "}
          </b>
        </h3>
        <br></br>
        <div className="nueva-pregunta">
          <h2>
            <b>Escribe el enunciado del problema</b>
          </h2>
          <div>
            <label htmlFor="enunciado-input" className="label-grande"></label>
            <input type="text" id="enunciado-input" value={enunciado} onChange={e => setEnunciado(e.target.value)} />
          </div>
        </div>
        <br></br>

        <div className="nueva-pregunta">
          <h2>
            <b>Escribe el problema</b>
          </h2>
          <div>
            <AceEditor
                mode="python"
                theme="monokai"
                value={code}
                onChange={(newCode) => setCode(newCode)}
                name="nueva-pregunta-input"
                editorProps={{ $blockScrolling: true }}
            />
          </div>
        </div>
        <br></br>

        <div className="nueva-pregunta">
          <h2>
            <b>Escribe la respuesta del problema</b>
          </h2>
          <div>
            <label htmlFor="nueva-respuesta-input" className="label-grande"></label>
            <input type="text" id="nueva-respuesta-input" value={respuesta} onChange={e => setRespuesta(e.target.value)} />
          </div>
        </div>
        <br></br>

        <div className="facil">
          <h2>
            <b>Seleccione un Modo</b>
          </h2>
          <h3>
            Seleccion el nivel de dificultad que tiene la nueva pregunta.
          </h3>
          <select id="dificultad" className="form-select">
            <option value="facil">Fácil</option>
            <option value="intermedio">Intermedio</option>
            <option value="dificil">Difícil</option>
          </select>
          <br/>
        </div>

        <br></br>
        <div className="nueva-pregunta">
          <h2>
            <b>Agregar un nuevo desafio</b>
          </h2>
          <h3>
            ¡Haz click en agregar para que otros usuarios resuelvan tu pregunta!
          </h3>
          <button type="button" className="btn btn-primary" onClick={manejarAgregar}>
            Agregar
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
