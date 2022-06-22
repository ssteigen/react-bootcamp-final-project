import React, { Component } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { MenuItem, Select } from "@mui/material";

import "./Navbar.css";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;

    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">React Color Picker</a>
        </div>
        <div className="Navbar-slider-container">
          <span>Level: {level}</span>
        </div>
        <div className="Navbar-slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
          />
        </div>
        <Select value={format} onChange={this.handleChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,0.1)</MenuItem>
        </Select>
      </header>
    );
  }
}
