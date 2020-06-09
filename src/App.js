import React from "react";
import TM from "./TM";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="header">Vizualizacija Turingove mašine</h1>
      <p
        style={{
          margin: "5%",
          textAlign: "left",
        }}
      >
        U nastavku je predstavljen rad TM. Unesen je primjer u kojem TM mijenja
        sve simbole na traci u jedinice te terminira nakon što pročita sve
        simbole (dođe do znaka blank). <br />
        Za pokretanje primjera kliknite na dugme Pokreni ili Izvrši iteraciju.{" "}
        <br />
        Za unos i pokretanje novog primjera uradite sljedeće: <br />
        <ol>
          <li>Unesite ulazne simbole i simbole trake (ista lista)</li>
          <li>Unesite listu stanja</li>
          <li>Unesite listu finalnih stanja </li>
          <li>Unesite početno stanje </li>
          <li>Unesite simbol koji označava praznu ćeliju </li>
          <li>Unesite listu prijelaza</li>
        </ol>
      </p>
      <TM></TM>
    </div>
  );
}

export default App;
