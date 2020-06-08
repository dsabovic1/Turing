import React, { Component } from "react";

class MachineReadingHead extends Component {
  render() {
    return (
      <div
        {...this.props}
        style={{
          width: "120px",
          height: "50px",
          position: "absolute",
        }}
      >
        <svg
          width="30%"
          height="80%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            points="20,90,50,2,80,90"
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
