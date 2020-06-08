import React, { Component } from "react";
import LetterList from "./LetterList";

class TM extends Component {
  constructor(props) {
    super(props);

    this.setLetters = this.setLetters.bind(this);

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

  setLetters(letters) {
    let fixedTransitions = this.state.transitions.slice();
    fixedTransitions = fixedTransitions.map((transition) => {
      let newTransition = Object.assign({}, transition);
      if (letters.indexOf(newTransition.readLetter) === -1)
        newTransition.readLetter = letters[0];
      if (letters.indexOf(newTransition.newLetter) === -1)
        newTransition.newLetter = letters[0];
      return newTransition;
    });
    let fixedTapeLetters = this.state.tapeLetters.slice();
    fixedTapeLetters = fixedTapeLetters.map((letter) => {
      if (letters.indexOf(letter) === -1) return letters[0];
      return letter;
    });
    this.setState({
      letters: letters,
      transitions: fixedTransitions,
      tapeLetters: fixedTapeLetters,
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
