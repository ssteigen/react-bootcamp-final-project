import React, { Component } from "react";
import "./SingleColorPalette.css";
import { ColorBox } from "./ColorBox";
import { Navbar } from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(format) {
    this.setState({ format });
  }

  // return all shades of given color
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }

    // The first entry is always white. We don't need it, so remove it.
    return shades.slice(1);
  }

  render() {
    const { format } = this.state;
    const { id, paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="Palette SingleColorPalette">
        <Navbar handleChange={this.changeFormat} showSlider={false} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="Palette-go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
