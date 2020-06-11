import React, { Component } from "react";
import SadrzajTrake from "./SadrzajTrake";
import ListaSimbola from "./ListaSimbola";
import ListaStanja from "./ListaStanja";
import ListaPrijelaza from "./ListaPrijelaza";
import Kontrole from "./Kontrole";
import Traka from "./Traka";
import { ListColumn, ListRow, default as List } from "./Lista";
import { EditableField } from "./Inputs";

import PopUp from "./PopUp";

class TM extends Component {
  constructor(props) {
    super(props);

    this.setSadrzajTrake = this.setSadrzajTrake.bind(this);
    this.postaviSimbole = this.postaviSimbole.bind(this);
    this.postaviStanja = this.postaviStanja.bind(this);
    this.postaviPrijelaze = this.postaviPrijelaze.bind(this);
    this.izvrsiPrijelaz = this.izvrsiPrijelaz.bind(this);
    this.izmjeniPocetnoStanje = this.izmjeniPocetnoStanje.bind(this);
    this.izmjeniSimbolPrazneCelije = this.izmjeniSimbolPrazneCelije.bind(this);
    this.postaviFinalnaStanja = this.postaviFinalnaStanja.bind(this);
    this.reinit = this.reinit.bind(this);
    this.postaviBrzinu = this.postaviBrzinu.bind(this);

    this.state = {
      stanja: ["q0", "q1"],
      simboli: ["0", "1"],
      simbolPrazneCelije: "_",
      finalnaStanja: ["q1"],
      prijelazi: [
        {
          trenutnoStanje: "q0",
          simbolNaTraci: "0",
          novoStanje: "q1",
          noviSimbol: "_",
          smjerKretanja: "R",
        },
        {
          trenutnoStanje: "q0",
          simbolNaTraci: "1",
          novoStanje: "q2",
          noviSimbol: "_",
          smjerKretanja: "R",
        },
        {
          trenutnoStanje: "q0",
          simbolNaTraci: "_",
          novoStanje: "q7",
          noviSimbol: "_",
          smjerKretanja: "R",
        },
        {
          trenutnoStanje: "q1",
          simbolNaTraci: "0",
          novoStanje: "q1",
          noviSimbol: "0",
          smjerKretanja: "R",
        },
        {
          trenutnoStanje: "q1",
          simbolNaTraci: "1",
          novoStanje: "q1",
          noviSimbol: "1",
          smjerKretanja: "R",
        },
        {
          trenutnoStanje: "q1",
          simbolNaTraci: "_",
          novoStanje: "q3",
          noviSimbol: "_",
          smjerKretanja: "L",
        },
        {
          trenutnoStanje: "q2",
          simbolNaTraci: "0",
          novoStanje: "q2",
          noviSimbol: "0",
          smjerKretanja: "R",
        },
        {
          trenutnoStanje: "q2",
          simbolNaTraci: "1",
          novoStanje: "q2",
          noviSimbol: "1",
          smjerKretanja: "R",
        },
        {
          trenutnoStanje: "q2",
          simbolNaTraci: "_",
          novoStanje: "q4",
          noviSimbol: "_",
          smjerKretanja: "L",
        },
        {
          trenutnoStanje: "q3",
          simbolNaTraci: "0",
          novoStanje: "q5",
          noviSimbol: "_",
          smjerKretanja: "L",
        },
        {
          trenutnoStanje: "q3",
          simbolNaTraci: "1",
          novoStanje: "q6",
          noviSimbol: "1",
          smjerKretanja: "R",
        },
        {
          trenutnoStanje: "q3",
          simbolNaTraci: "_",
          novoStanje: "q7",
          noviSimbol: "_",
          smjerKretanja: "R",
        },
        {
          trenutnoStanje: "q4",
          simbolNaTraci: "0",
          novoStanje: "q6",
          noviSimbol: "0",
          smjerKretanja: "R",
        },
        {
          trenutnoStanje: "q4",
          simbolNaTraci: "1",
          novoStanje: "q5",
          noviSimbol: "_",
          smjerKretanja: "L",
        },
        {
          trenutnoStanje: "q4",
          simbolNaTraci: "_",
          novoStanje: "q7",
          noviSimbol: "_",
          smjerKretanja: "R",
        },
        {
          trenutnoStanje: "q5",
          simbolNaTraci: "0",
          novoStanje: "q5",
          noviSimbol: "0",
          smjerKretanja: "L",
        },
        {
          trenutnoStanje: "q5",
          simbolNaTraci: "1",
          novoStanje: "q5",
          noviSimbol: "1",
          smjerKretanja: "L",
        },
        {
          trenutnoStanje: "q5",
          simbolNaTraci: "_",
          novoStanje: "q0",
          noviSimbol: "_",
          smjerKretanja: "R",
        },
      ],
      sadrzajTrake: ["_", "0", "1", "0", "1", "0", "1", "_"],
      indexTrenutnogStanja: 0,
      indexTrenutnogSimbola: 0,
      indexSljedecegPrijelaza: 0,
      indexTrenutnogFinalnogStanja: -1,
      trenutnaPozicijaGlave: 1,
      status: "",
      pocetnoStanje: ["q0"],
      prihvacen: false,
      ok: 1,
      brzina: 1,
    };
  }

  izmjeniPocetnoStanje(value) {
    this.setState({ pocetnoStanje: value });
  }

  izmjeniSimbolPrazneCelije(value) {
    this.setState({ simbolPrazneCelije: value });
  }

  postaviPrijelaze(prijelazi) {
    this.setState({ prijelazi: prijelazi });
  }

  postaviStanja(stanja) {
    this.setState({
      stanja: stanja,
    });
  }

  postaviFinalnaStanja(stanja) {
    this.setState({
      finalnaStanja: stanja,
    });
  }

  postaviSimbole(simboli) {
    this.setState({
      simboli: simboli,
    });
  }

  izvrsiPrijelaz() {
    this.validacija();
    if (this.state.ok === 1) {
      let prijelaz = this.state.prijelazi.find((prijelaz) => {
        return (
          prijelaz.trenutnoStanje ===
            this.state.stanja[this.state.indexTrenutnogStanja] &&
          prijelaz.simbolNaTraci ===
            this.state.sadrzajTrake[this.state.trenutnaPozicijaGlave]
        );
      });
      if (prijelaz === undefined) {
        this.setState({
          status: " Ne postoji prijelaz za trenutno stanje i simbol",
        });
      }
      let noviNizSimbola = this.state.sadrzajTrake.slice();
      let novaPozicijaGlave;
      if (
        noviNizSimbola[this.state.trenutnaPozicijaGlave] ===
        this.state.simbolPrazneCelije
      ) {
        if (prijelaz.smjerKretanja === "R") {
          noviNizSimbola.push(this.state.simbolPrazneCelije);
          noviNizSimbola[this.state.trenutnaPozicijaGlave] =
            prijelaz.noviSimbol;
          novaPozicijaGlave = this.state.trenutnaPozicijaGlave + 1;
        } else {
          noviNizSimbola.unshift(this.state.simbolPrazneCelije);
          noviNizSimbola[this.state.trenutnaPozicijaGlave + 1] =
            prijelaz.noviSimbol;
          novaPozicijaGlave = this.state.trenutnaPozicijaGlave;
        }
      } else {
        noviNizSimbola[this.state.trenutnaPozicijaGlave] = prijelaz.noviSimbol;
        novaPozicijaGlave =
          this.state.trenutnaPozicijaGlave +
          (prijelaz.smjerKretanja === "L" ? -1 : 1);
      }
      this.setState({
        indexTrenutnogStanja: this.state.stanja.indexOf(prijelaz.novoStanje),
        sadrzajTrake: noviNizSimbola,
        trenutnaPozicijaGlave: novaPozicijaGlave,
        indexTrenutnogSimbola: this.state.simboli.indexOf(
          this.state.sadrzajTrake[novaPozicijaGlave]
        ),
        indexSljedecegPrijelaza: this.state.prijelazi.indexOf(prijelaz),
      });
    }
  }

  setSadrzajTrake(rijec) {
    this.setState({
      sadrzajTrake: rijec,
    });
  }

  validacija() {
    let skupPrijelaza = this.state.prijelazi;
    for (let i = 0; i < skupPrijelaza.length; i++) {
      let element = skupPrijelaza[i];
      if (
        (this.state.simboli.indexOf(element.simbolNaTraci) === -1 &&
          element.simbolNaTraci != this.state.simbolPrazneCelije) ||
        (this.state.simboli.indexOf(element.noviSimbol) === -1 &&
          element.noviSimbol != this.state.simbolPrazneCelije)
      ) {
        this.setState({
          ok: "Simboli u funkcijama prijelaza nisu iz skupa simbola alfabeta",
        });
      }
      if (
        this.state.stanja.indexOf(element.trenutnoStanje) === -1 ||
        this.state.stanja.indexOf(element.novoStanje) === -1
      ) {
        this.setState({
          ok: "Stanja u funkcijama prijelaza nisu iz skupa stanja",
        });
      }
    }

    let novaFinalnaStanja = this.state.finalnaStanja;
    for (let i = 0; i < novaFinalnaStanja.length; i++) {
      let element = novaFinalnaStanja[i];
      if (this.state.stanja.indexOf(element) === -1) {
        this.setState({
          ok: "Finalna stanja nisu iz skupa stanja",
        });
      }
    }

    let noviSadrzajTrake = this.state.sadrzajTrake;
    for (let i = 0; i < noviSadrzajTrake.length; i++) {
      let element = noviSadrzajTrake[i];
      if (
        this.state.simboli.indexOf(element) === -1 &&
        element != this.state.simbolPrazneCelije
      ) {
        this.setState({
          ok: "Simboli na traci nisu iz skupa simbola alfabeta",
        });
      }
    }
  }

  reinit() {
    this.setState({
      prihvacen: false,
      trenutnaPozicijaGlave: 1,
      indexSljedecegPrijelaza: 0,
      indexTrenutnogFinalnogStanja: -1,
      indexTrenutnogStanja: 0,
      status: "",
    });
  }

  postaviBrzinu(value) {
    this.setState({
      brzina: value,
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <ListaSimbola
            simboli={this.state.simboli}
            postaviSimbole={this.postaviSimbole}
            indexTrenutnogSimbola={this.state.indexTrenutnogSimbola}
          />
          <ListaStanja
            stanja={this.state.stanja}
            postaviStanja={this.postaviStanja}
            indexTrenutnogStanja={this.state.indexTrenutnogStanja}
            title="Stanja"
          />
          <ListaStanja
            stanja={this.state.finalnaStanja}
            postaviStanja={this.postaviFinalnaStanja}
            indexTrenutnogStanja={this.state.indexTrenutnogFinalnogStanja}
            title="Finalna stanja"
            type="finalna"
          />
          <div
            style={{
              margin: "15px",
              padding: "10px",
              backgroundColor: "rgba(0,0,0,0.8)",
              maxWidth: "100%",
              boxShadow: "2px 2px 7px black",
            }}
          >
            <h3 style={{ color: "white", paddingLeft: "5px" }}>
              Početno stanje
            </h3>
            <ListRow>
              <EditableField
                value={this.state.pocetnoStanje}
                setValue={(value) => {
                  this.izmjeniPocetnoStanje(value);
                }}
              />
            </ListRow>
          </div>
          <div
            style={{
              margin: "15px",
              padding: "10px",
              backgroundColor: "rgba(0,0,0,0.8)",
              maxWidth: "100%",
              boxShadow: "2px 2px 7px black",
            }}
          >
            <h3 style={{ color: "white", paddingLeft: "5px" }}>
              Simbol prazne ćelije
            </h3>
            <ListRow>
              <EditableField
                value={this.state.simbolPrazneCelije}
                setValue={(value) => {
                  this.izmjeniSimbolPrazneCelije(value);
                }}
              />
            </ListRow>
          </div>
          <div>
            <div
              style={{
                margin: "15px",
                padding: "10px",
                backgroundColor: "rgba(0,0,0,0.8)",
                maxWidth: "100%",
                boxShadow: "2px 2px 7px black",
              }}
            >
              <label>
                <h3 style={{ color: "white", paddingLeft: "5px" }}>
                  Brzina (broj instrukcija po sekundi)
                </h3>
                <ListRow>
                  <EditableField
                    value={this.state.brzina}
                    setValue={(value) => {
                      this.postaviBrzinu(value);
                    }}
                  />
                </ListRow>
              </label>
            </div>
          </div>
          <div
            style={{
              width: "90%",
              minWidth: "800px",
            }}
          >
            <ListaPrijelaza
              prijelazi={this.state.prijelazi}
              stanja={this.state.stanja}
              simboli={this.state.simboli}
              postaviPrijelaze={this.postaviPrijelaze}
              indexSljedecegPrijelaza={this.state.indexSljedecegPrijelaza}
            />
          </div>
          <SadrzajTrake
            sadrzajTrake={this.state.sadrzajTrake}
            setSadrzajTrake={this.setSadrzajTrake}
            availableSimboli={this.state.simboli}
            trenutnaPozicijaGlave={this.state.trenutnaPozicijaGlave}
            simbolPrazneCelije={this.state.simbolPrazneCelije}
          />
          <Kontrole
            izvrsiPrijelaz={this.izvrsiPrijelaz}
            reinit={this.reinit}
            brzina={this.state.brzina}
          />

          {this.state.ok === 1 ? (
            ""
          ) : (
            <PopUp validacija={this.validacija} ok={this.state.ok}></PopUp>
          )}
          <div
            style={{
              width: "50%",
              minWidth: "800px",
            }}
          >
            <Traka
              sadrzajTrake={this.state.sadrzajTrake}
              trenutnaPozicijaGlave={this.state.trenutnaPozicijaGlave}
              sadrzajTrake={this.state.sadrzajTrake}
              setSadrzajTrake={this.setSadrzajTrake}
            />
          </div>
          <div>
            {this.state.finalnaStanja.indexOf(
              this.state.stanja[this.state.indexTrenutnogStanja].toString()
            ) >= 0 ? (
              <h2
                style={{
                  color: "green",
                }}
              >
                Ulaz je prihvaćen!
                {this.state.status
                  ? this.state.status + ". TM se nalazi u finalnom stanju"
                  : ""}
              </h2>
            ) : (
              <h2
                style={{
                  color: "red",
                }}
              >
                Ulaz nije prihvaćen!
                {this.state.status}
              </h2>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TM;
