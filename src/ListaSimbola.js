import React, { Component } from "react";
import List from "./Lista";
import { EditableField } from "./Inputs";

class ListaSimbola extends Component {
  constructor(props) {
    super(props);
    this.dodajSimbol = this.dodajSimbol.bind(this);
    this.ukloniSimbol = this.ukloniSimbol.bind(this);
    this.izmjeniSimbol = this.izmjeniSimbol.bind(this);
  }

  dodajSimbol() {
    let noviSimboli = this.props.simboli.slice();
    noviSimboli.push(this.props.simboli.length.toString());
    this.props.postaviSimbole(noviSimboli);
  }

  ukloniSimbol() {
    let noviSimboli = this.props.simboli.slice();
    noviSimboli.pop();
    this.props.postaviSimbole(noviSimboli);
  }

  izmjeniSimbol(index, value) {
    let noviSimboli = this.props.simboli.slice();
    noviSimboli[index] = value.toString();
    this.props.postaviSimbole(noviSimboli);
  }

  render() {
    return (
      <List
        title="Simboli alfabeta"
        addNew={this.dodajSimbol}
        removeLast={
          this.props.simboli.length > 1 ? this.ukloniSimbol : undefined
        }
        items={this.props.simboli.map((state, index) => {
          return (
            <EditableField
              value={state}
              setValue={(value) => {
                this.izmjeniSimbol(index, value);
              }}
            />
          );
        })}
        primaryHighlightIndex={this.props.indexTrenutnogSimbola}
      ></List>
    );
  }
}

export default ListaSimbola;
