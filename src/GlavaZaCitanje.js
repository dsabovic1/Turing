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
          left: "calc(50% + 30px)",
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
              fill: "white",
              stroke: "black",
            }}
          />
        </svg>
      </div>
    );
  }
}

export default MachineReadingHead;
