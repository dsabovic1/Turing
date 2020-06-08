import React from "react";
import TM from "./TM";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          fontSize: "50px",
          margin: "15px",
          textAlign: "center",
        }}
      >
        Vizualizacija Turingove mašine
      </h1>
      <p
        style={{
          margin: "15px",
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
