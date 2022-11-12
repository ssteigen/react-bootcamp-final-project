import React, { Component } from "react";

import withStyles from "@material-ui/styles/withStyles";

import { Link } from "react-router-dom";

import MiniPalette from "./MiniPalette";
import PaletteListStyles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes, deletePalette } = this.props;

    return (
      <div className={classes.PaletteList}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <div key={palette.id}>
                <MiniPalette
                  {...palette}
                  handleDelete={deletePalette}
                  handleClick={() => this.goToPalette(palette.id)}
                  key={palette.id}
                  id={palette.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(PaletteListStyles)(PaletteList);
