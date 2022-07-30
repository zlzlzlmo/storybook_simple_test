import React, { Component } from "react";
import Location from "./Location";
import Navigation from "./Navigation";

export interface ButtonProps {
  btnType: "location" | "navigation" | "test";
  size: "sm" | "md" | "lg";
  onClick: () => void;
}

export default class Button extends Component<ButtonProps> {
  renderButton(props: ButtonProps) {
    switch (props.btnType) {
      case "location":
        return <Location {...props} />;
      case "navigation":
        return <Navigation {...props} />;
    }
  }

  render() {
    return this.renderButton(this.props);
  }
}
