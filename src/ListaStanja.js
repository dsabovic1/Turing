import React, { Component } from "react";
import { ListColumn, ListRow, default as List } from "./Lista";
import { EditableField } from "./Inputs";

class ListaStanja extends Component {
  constructor(props) {
    super(props);
    this.dodajNovoStanje = this.dodajNovoStanje.bind(this);
    this.ukloniStanje = this.ukloniStanje.bind(this);
    this.izmjeniStanje = this.izmjeniStanje.bind(this);
  }
  dodajNovoStanje(type) {
    let novaStanja = this.props.stanja.slice();
    novaStanja.push("q" + this.props.stanja.length);
    type == "finalna"
      ? this.props.postaviFinalnaStanja(novaStanja)
      : this.props.postaviStanja(novaStanja);
  }

  ukloniStanje() {
    let novaStanja = this.props.stanja.slice();
    novaStanja.pop();
    this.props.postaviStanja(novaStanja);
  }

  izmjeniStanje(index, value) {
    let novaStanja = this.props.stanja.slice();
    novaStanja[index] = value;
    this.props.postaviStanja(novaStanja);
  }

  render() {
    return (
      <List
        title={this.props.title}
        addNew={this.dodajNovoStanje}
        removeLast={
          this.props.stanja.length > 1 ? this.ukloniStanje : undefined
        }
        items={this.props.stanja.map((state, index) => {
          return (
            <EditableField
              value={state}
              setValue={(value) => {
                this.izmjeniStanje(index, value);
              }}
            />
          );
        })}
        primaryHighlightIndex={this.props.indexTrenutnogStanja}
      />
    );
  }
}

export default ListaStanja;
