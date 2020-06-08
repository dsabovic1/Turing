import React, { Component } from "react";
import { ListColumn, ListRow, default as List } from "./Lista";
import { EditableField, RemoveButton, ToggleButton } from "./Inputs";

class ListaPrijelaza extends Component {
  constructor(props) {
    super(props);
    this.dodajNoviPrijelaz = this.dodajNoviPrijelaz.bind(this);
    this.izmjeniPrijelaz = this.izmjeniPrijelaz.bind(this);
    this.ukloniPrijelaz = this.ukloniPrijelaz.bind(this);
  }

  dodajNoviPrijelaz() {
    let noviPrijelazi = this.props.prijelazi.slice();
    noviPrijelazi.push({
      trenutnoStanje: this.props.stanja[0],
      simbolNaTraci: this.props.simboli[0],
      novoStanje: this.props.stanja[0],
      noviSimbol: this.props.simboli[0],
      smjerKretanja: "L",
    });
    this.props.postaviPrijelaze(noviPrijelazi);
  }

  ukloniPrijelaz(index) {
    let noviPrijelazi = this.props.prijelazi.slice();
    noviPrijelazi.splice(index, 1);
    this.props.postaviPrijelaze(noviPrijelazi);
  }

  izmjeniPrijelaz(index, property, newValue) {
    let noviPrijelaz = Object.assign({}, this.props.prijelazi[index], {
      [property]: newValue,
    });
    let noviPrijelazi = this.props.prijelazi.slice();
    noviPrijelazi[index] = noviPrijelaz;
    this.props.postaviPrijelaze(noviPrijelazi);
  }

  render() {
    return (
      <List
        title="Lista prijelaza"
        minWidth={600}
        addNew={this.dodajNoviPrijelaz}
        removeItem={this.ukloniPrijelaz}
        header={[
          "Trenutno stanje",
          "Simbol na traci",
          "Novo stanje",
          "Novi simbol",
          "Smjer kretanja",
          " ",
        ]}
        items={this.props.prijelazi.map((transition, index) => {
          return [
            <EditableField
              value={transition.trenutnoStanje}
              values={this.props.states}
              setValue={(value) => {
                this.izmjeniPrijelaz(index, "trenutnoStanje", value);
              }}
            />,
            <EditableField
              value={transition.simbolNaTraci}
              values={this.props.letters}
              setValue={(value) => {
                this.izmjeniPrijelaz(index, "simbolNaTraci", value);
              }}
            />,
            <EditableField
              value={transition.novoStanje}
              values={this.props.states}
              setValue={(value) => {
                this.izmjeniPrijelaz(index, "novoStanje", value);
              }}
            />,
            <EditableField
              value={transition.noviSimbol}
              values={this.props.letters}
              setValue={(value) => {
                this.izmjeniPrijelaz(index, "noviSimbol", value);
              }}
            />,
            <ToggleButton
              direction
              value={transition.smjerKretanja}
              values={["L", "R"]}
              setValue={(value) => {
                this.izmjeniPrijelaz(index, "smjerKretanja", value);
              }}
            />,
          ];
        })}
        columnWidths={[200, 100, 200, 120, 120, 50]}
      />
    );
  }
}

export default ListaPrijelaza;
