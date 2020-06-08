import React, { Component } from "react";

class MachineReadingHead extends Component {
  render() {
    return (
      <div
        {...this.props}
        style={{
          width: "200px",
          height: "80px",
          position: "absolute",
          alignContent: "center",
        }}
      >
        <svg
          width="30%"
          height="80%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            points="20,2 50,98, 80,2"
            style={{
              fill: "yellow",
              stroke: "black",
            }}
          />
        </svg>
      </div>
    );
  }
}

export default MachineReadingHead;
