import React, { Component } from "react";
import { Link } from "react-router-dom";

import MiniPalette from "./MiniPalette";

export class PaletteList extends Component {
  render() {
    const { palettes } = this.props;

    return (
      <div className="PaletteList">
        <h1>React Colors</h1>
        {palettes.map((palette) => (
          <div key={palette.id}>
            <Link to={`/palette/${palette.id}`}>
              <MiniPalette {...palette} />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
