import React, { Component } from "react";
import LetterList from "./LetterList";

class TM extends Component {
  constructor(props) {
    super(props);

    this.setTransitions = this.setTransitions.bind(this);
    this.setStates = this.setStates.bind(this);
    this.setLetters = this.setLetters.bind(this);
    this.setTapeLettersAndShiftTapePosition = this.setTapeLettersAndShiftTapePosition.bind(
      this
    );
    this.setTapePosition = this.setTapePosition.bind(this);
    this.runIteration = this.runIteration.bind(this);
    this.loadProgram = this.loadProgram.bind(this);

    this.state = {
      states: ["STATE 0"], //always length >= 1
      transitions: [
        {
          oldState: "STATE 0",
          readLetter: "A",
          newState: "STATE 0",
          newLetter: "A",
          moveDirection: "L",
        },
      ],
      letters: ["A"], //always length >= 1
      tapeLetters: ["A"],
      currentStateIndex: 0,
      currentTapePosition: 0,
    };
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
          <LetterList
            letters={this.state.letters}
            setLetters={this.setLetters}
            currentLetterIndex={this.state.letters.indexOf(
              this.state.tapeLetters[this.state.currentTapePosition]
            )}
          />
        </div>
      </div>
    );
  }
}

export default TM;
