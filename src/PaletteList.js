import React, { Component } from "react";
import "./PaletteList.css";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";

export class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes } = this.props;

    return (
      <div className="PaletteList">
        <div className="PaletteList-container">
          <nav className="PaletteList-nav">
            <h1>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div className="PaletteList-palettes">
            {palettes.map((palette) => (
              <div key={palette.id}>
                <MiniPalette
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
