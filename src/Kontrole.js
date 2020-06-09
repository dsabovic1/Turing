import React, { Component } from "react";
import { Button } from "./Inputs";

class Kontrole extends Component {
  constructor(props) {
    super(props);
    this.izvrsiPrijelaz = this.izvrsiPrijelaz.bind(this);
    this.pokreni = this.pokreni.bind(this);
    this.zaustavi = this.zaustavi.bind(this);

    this.state = {
      intervalId: null,
      brzina: 1,
    };
  }

  izvrsiPrijelaz() {
    try {
      this.props.izvrsiPrijelaz();
    } catch (err) {
      if (this.state.intervalId !== null) {
        this.zaustavi();
      }
      return this.setState({ error: err });
    }
    this.setState({ error: null });
  }

  pokreni() {
    let intervalId = window.setInterval(
      this.izvrsiPrijelaz,
      (1 / this.state.brzina) * 1000
    );
    this.setState({ intervalId: intervalId });
  }

  zaustavi() {
    if (this.state.intervalId !== null) {
      window.clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
    }
  }

  componentWillUnmount() {
    this.zaustavi();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          spaceBetween: "5px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "10px",
          }}
        >
          {this.state.intervalId === null ? (
            <Button big onClick={this.pokreni} text="Pokreni" />
          ) : (
            <Button big onClick={this.zaustavi} text="Zaustavi" />
          )}
          <Button
            big
            onClick={this.izvrsiPrijelaz}
            text="Izvrši jednu iteraciju"
          />
          <Button
            big
            onClick={() => window.location.reload(false)}
            text="Reinicijalizacija"
          />
          <div
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Kontrole;
