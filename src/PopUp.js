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
            bottom: "60%",
            margin: "auto",
            minWidth: "100px",
            backgroundColor: "rgba(250,1,1, 0.6)",

            borderRadius: "10px",
          }}
        >
          <button
            style={{
              position: "absolute",
              marginTop: "0px",
              marginRight: "0px",
              marginLeft: "92%",

              backgroundColor: "rgba(1,1,1, 0.4)",
            }}
            onClick={this.zatvoriPopUp}
          >
            X
          </button>
          <h3
            style={{
              marginTop: "30px",
              marginLeft: "10px",
              color: "white",
            }}
          >
            {this.props.ok}
          </h3>
        </div>
      </div>
    );
  }
}
