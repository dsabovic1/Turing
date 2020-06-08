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

  addLetter(toBeginning) {
    let newTapeSimboli = this.props.tapeSimboli.slice();
    if (toBeginning) newTapeSimboli.unshift(this.props.availableSimboli[0]);
    else newTapeSimboli.push(this.props.availableSimboli[0]);
    this.props.setTapeSimboli(newTapeSimboli, toBeginning ? 1 : 0);
  }
  postaviSimbol(index, letter) {
    let newTapeSimboli = this.props.tapeSimboli.slice();
    newTapeSimboli[index] = letter;
    this.props.setTapeSimboli(newTapeSimboli);
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {this.props.sadrzajTrake.map((simbol, index) => {
            return (
              <TapeLetter
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

function TapeLetter(props) {
  return (
    <TapeBlock size={props.size} active={props.active}>
      />
      <ToggleButton
        value={props.simbol}
        values={props.simboli}
        setValue={(value) => props.postaviSimbol(props.index, value)}
      >
        {props.letter}
      </ToggleButton>
    </TapeBlock>
  );
}

function TapeBlock(props) {
  let backgroundColor = "#EEE";
  let border = "1px solid black";

  if (props.active) backgroundColor = "#8cb7ff";
  if (props.utility) backgroundColor = "rgba(0,0,0,0)";
  if (props.utility) border = "0";
  return (
    <div
      style={{
        width: props.size + "px",
        height: props.size + "px",
        backgroundColor: backgroundColor,
        fontSize: "20px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        padding: "5px",
        border: border,
        boxSizing: "border-box",
      }}
    >
      <GlavaZaCitanje />
      {props.children}
    </div>
  );
}

export default Traka;
