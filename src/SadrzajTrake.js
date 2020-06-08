import React, { Component } from "react";
import Traka from "./Traka";
import GlavaZaCitanje from "./GlavaZaCitanje";

class SadrzajTrake extends Component {
  constructor(props) {
    super(props);
    this.addSadrzajTrake = this.addSadrzajTrake.bind(this);
    this.removeSadrzajTrake = this.removeSadrzajTrake.bind(this);
  }

  addSadrzajTrake(sadrzaj) {
    var str = this.refs.tekst.value;
    var ar = [];
    ar = str.split("");
    this.props.setSadrzajTrake(ar);
    console.log(ar);
  }

  removeSadrzajTrake() {
    let newSimboli = this.props.simboli.slice();
    newSimboli.pop();
    this.props.postaviSimbole(newSimboli);
  }

  render() {
    return (
      <div>
        <div
          style={{
            margin: "15px",
            padding: "10px",
            backgroundColor: "rgba(0,0,0,0.5)",
            overflowX: "auto",
            maxWidth: "100%",
            border: "2px solid rgb(0, 15, 41)",
            boxShadow: "2px 2px 10px black",
          }}
        >
          <label>
            <h3 style={{ color: "white", paddingLeft: "5px" }}>
              Sadržaj trake
            </h3>
            <input
              defaultValue={this.props.sadrzajTrake}
              type="text"
              name="sadrzaj"
              ref="tekst"
            />
          </label>
          <button value="Send" onClick={this.addSadrzajTrake}>
            +
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{ position: "relative", height: "140px", marginTop: "20px" }}
          >
            <Traka
              sadrzajTrake={this.props.sadrzajTrake}
              trenutnaPozicijaGlave={this.props.trenutnaPozicijaGlave}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SadrzajTrake;
