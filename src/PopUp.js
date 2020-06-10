import React, { Component } from "react";

export default class PopUp extends Component {
  constructor(props) {
    super(props);
    this.zatvoriPopUp = this.zatvoriPopUp.bind(this);
    this.state = {
      zatvoreno: 0,
    };
  }
  zatvoriPopUp() {
    this.setState({
      zatvoreno: 1,
    });
  }
  render() {
    return this.state.zatvoreno ? (
      ""
    ) : (
      <div
        className="popup"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          margin: "auto",
          backgroundColor: "rgba(0,0,0, 0.5)",
        }}
      >
        <div
          className="popup_inner"
          style={{
            position: "absolute",
            left: "25%",
            right: "25%",
            top: "25%",
            height: "170px",
            margin: "auto",
            minWidth: "200px",
            maxWidth: "300px",
            backgroundColor: "white",

            borderRadius: "5px",
          }}
        >
          <h2
            style={{
              marginLeft: "10px",

              color: "red",
            }}
          >
            Došlo je do greške!
          </h2>
          <h4
            style={{
              marginTop: "20px",
              marginLeft: "10px",
            }}
          >
            {this.props.ok}
          </h4>

          <div
            style={{
              marginLeft: "40%",
            }}
          >
            <button onClick={this.zatvoriPopUp}>Zatvori</button>
          </div>
        </div>
      </div>
    );
  }
}
