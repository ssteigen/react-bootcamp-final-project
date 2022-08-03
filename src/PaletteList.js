import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PaletteList.css";
import MiniPalette from "./MiniPalette";

export class PaletteList extends Component {
  render() {
    const { palettes } = this.props;

    return (
      <div className="PaletteList">
        <div className="PaletteList-container">
          <nav className="PaletteList-nav">
            <h1>React Colors</h1>
          </nav>
          <div className="PaletteList-palettes">
            {palettes.map((palette) => (
              <div key={palette.id}>
                <Link to={`/palette/${palette.id}`}>
                  <MiniPalette {...palette} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
