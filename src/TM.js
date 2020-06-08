import React, { Component } from "react";
import ListaSimbola from "./ListaSimbola";
import ListaStanja from "./ListaStanja";
import ListaPrijelaza from "./ListaPrijelaza";
import Kontrole from "./Kontrole";

class TM extends Component {
  constructor(props) {
    super(props);
    this.postaviSimbole = this.postaviSimbole.bind(this);
    this.postaviStanja = this.postaviStanja.bind(this);
    this.postaviPrijelaze = this.postaviPrijelaze.bind(this);
    this.izvrsiPrijelaz = this.izvrsiPrijelaz.bind(this);

    this.state = {
      stanja: ["q0"],
      simboli: [0, 1],
      prijelazi: [
        {
          trenutnoStanje: "q0",
          simbolNaTraci: "0",
          novoStanje: "q0",
          noviSimbol: "0",
          smjerKretanja: "L",
        },
      ],
      indexTrenutnogStanja: 0,
      indexTrenutnogSimbola: 0,
      indexSljedecegPrijelaza: 0,
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

  postaviSimbole(simboli) {
    this.setState({
      simboli: simboli,
    });
  }

  izvrsiPrijelaz() {
    let prijelaz = this.state.prijelazi.find((prijelaz) => {
      return prijelaz;
    });
    this.setState({
      indexTrenutnogStanja: this.state.stanja.indexOf(prijelaz.novoStanje),
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
          />
          <ListaPrijelaza
            prijelazi={this.state.prijelazi}
            stanja={this.state.stanja}
            simboli={this.state.simboli}
            postaviPrijelaze={this.postaviPrijelaze}
            indexSljedecegPrijelaza={this.state.indexSljedecegPrijelaza}
          />
        </div>
        <Kontrole izvrsiPrijelaz={this.izvrsiPrijelaz} />
      </div>
    );
  }
}

export default TM;
