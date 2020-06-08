import React, { Component } from "react";
import { ToggleButton, AddButton } from "./Inputs";

import GlavaZaCitanje from "./GlavaZaCitanje";

class Traka extends Component {
  constructor(props) {
    super(props);
    this.state = {
      velicinaBloka: 40,
    };
  }

  postaviSimbol(index, letter) {
    let noviSimboliTrake = this.props.tapeSimboli.slice();
    noviSimboliTrake[index] = letter;
    this.props.setTapeSimboli(noviSimboliTrake);
  }

  render() {
    return (
      <div
        style={{
          top: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {this.props.sadrzajTrake.map((simbol, index) => {
            return (
              <SadrzajTrake
                active={this.props.trenutnaPozicijaGlave === index}
                size={this.state.velicinaBloka}
                index={index}
                simbol={simbol}
                simboli={this.props.availableSimboli}
                postaviSimbol={this.postaviSimbol}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function SadrzajTrake(props) {
  return (
    <SimbolTrake size={props.size} active={props.active}>
      <ToggleButton
        value={props.simbol}
        values={props.simboli}
        setValue={(value) => props.postaviSimbol(props.index, value)}
      >
        {props.letter}
      </ToggleButton>
    </SimbolTrake>
  );
}

function SimbolTrake(props) {
  let backgroundColor = "#EEE";
  let border = "1px solid black";

  if (props.active) backgroundColor = "#fffa69";
  if (props.utility) backgroundColor = "rgba(0,0,0,0)";
  if (props.utility) border = "0";
  return (
    <div>
      <div
        style={{
          width: props.size + "px",
          height: props.size + "px",
          backgroundColor: backgroundColor,
          fontSize: "20px",
          borderRadius: "5px",
          padding: "5px",
          border: border,
          boxSizing: "border-box",
        }}
      >
        {props.children}
        {props.active ? <GlavaZaCitanje /> : ""}
      </div>
    </div>
  );
}

export default Traka;
