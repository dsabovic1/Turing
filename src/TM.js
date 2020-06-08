import React, { Component } from "react";
import SadrzajTrake from "./SadrzajTrake";
import ListaSimbola from "./ListaSimbola";
import ListaStanja from "./ListaStanja";
import ListaPrijelaza from "./ListaPrijelaza";
import Kontrole from "./Kontrole";
import Traka from "./Traka";
import { ListColumn, ListRow, default as List } from "./Lista";
import { EditableField } from "./Inputs";

class TM extends Component {
  constructor(props) {
    super(props);

    this.setSadrzajTrake = this.setSadrzajTrake.bind(this);
    this.postaviSimbole = this.postaviSimbole.bind(this);
    this.postaviStanja = this.postaviStanja.bind(this);
    this.postaviPrijelaze = this.postaviPrijelaze.bind(this);
    this.izvrsiPrijelaz = this.izvrsiPrijelaz.bind(this);
    this.postaviFinalnaStanja = this.postaviFinalnaStanja.bind(this);

    this.state = {
      stanja: ["q0", "q1"],
      simboli: ["0", "1"],
      simbolPrazneCelije: "_",
      finalnaStanja: ["q1"],
      prijelazi: [
        {
          trenutnoStanje: "q0",
          simbolNaTraci: "0",
          novoStanje: "q0",
          noviSimbol: "1",
          smjerKretanja: "R",
        },

        {
          trenutnoStanje: "q0",
          simbolNaTraci: "1",
          novoStanje: "q0",
          noviSimbol: "1",
          smjerKretanja: "R",
        },
        {
          trenutnoStanje: "q0",
          simbolNaTraci: "b",
          novoStanje: "q1",
          noviSimbol: "b",
          smjerKretanja: "R",
        },
      ],
      sadrzajTrake: ["0", "1", "0", "1", "0", "1", "b"],
      indexTrenutnogStanja: 0,
      indexTrenutnogSimbola: 0,
      indexSljedecegPrijelaza: 0,
      indexTrenutnogFinalnogStanja: 0,
      trenutnaPozicijaGlave: 0,
      status: "",
      pocetnoStanje: ["q0"],
    };
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
        status: "Ne postoji prijelaz za trenutno stanje i simbol",
      });
    }
    let noviNizSimbola = this.state.sadrzajTrake.slice();
    noviNizSimbola[this.state.trenutnaPozicijaGlave] = prijelaz.noviSimbol;
    let novaPozicijaGlave =
      this.state.trenutnaPozicijaGlave +
      (prijelaz.smjerKretanja === "L" ? -1 : 1);
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

  setSadrzajTrake(rijec) {
    this.setState({
      sadrzajTrake: rijec,
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
              zaustavi: "auto",
              maxWidth: "100%",
              boxShadow: "2px 2px 7px black",
            }}
          >
            <h3 style={{ color: "white", paddingLeft: "5px" }}>
              Početno stanje
            </h3>
            <ListRow>
              <EditableField />
            </ListRow>
          </div>
          <List
            title="Simbol za praznu ćeliju"
            items={this.state.pocetnoStanje.map(() => {
              return (
                <EditableField
                  value={this.state.simbolPrazneCelije}
                  setValue={(value) => {
                    this.state.simbolPrazneCelije = value;
                  }}
                />
              );
            })}
          />
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
          />
          <Kontrole izvrsiPrijelaz={this.izvrsiPrijelaz} />
          <div
            style={{
              width: "90%",
              minWidth: "800px",
            }}
          >
            <Traka
              sadrzajTrake={this.state.sadrzajTrake}
              trenutnaPozicijaGlave={this.state.trenutnaPozicijaGlave}
            />
          </div>

          {this.state.trenutnoStanje === this.state.finalnoStanje ? (
            <h2
              style={{
                color: "red",
              }}
            >
              Ulaz nije prihvaćen
              {this.state.status}
            </h2>
          ) : (
            <h2
              style={{
                color: "green",
              }}
            >
              Ulaz je prihvaćen
              {this.state.status}
            </h2>
          )}
        </div>
      </div>
    );
  }
}

export default TM;
