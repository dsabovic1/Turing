import React, { Component } from "react";
import Traka from "./Traka";
import GlavaZaCitanje from "./GlavaZaCitanje";

class SadrzajTrake extends Component {
  constructor(props) {
    super(props);
    this.dodajSadrzajTrake = this.dodajSadrzajTrake.bind(this);
  }

  dodajSadrzajTrake(sadrzaj) {
    var str = this.refs.tekst.value;
    var ar = [];
    ar = str.split("");
    this.props.setSadrzajTrake(ar);
    console.log(ar);
  }

  render() {
    return (
      <div>
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
          <label>
            <h3 style={{ color: "white", paddingLeft: "5px" }}>
              Sadržaj trake
            </h3>
            <input
              defaultValue={this.props.sadrzajTrake.join("")}
              type="text"
              name="sadrzaj"
              ref="tekst"
            />
          </label>
          <button value="Send" onClick={this.dodajSadrzajTrake}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default SadrzajTrake;
