import React, { Component } from "react";

import { Delete } from "@material-ui/icons";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends Component {
  constructor(props) {
    super(props);

    this.deletePalette = this.deletePalette.bind(this);
  }

  deletePalette(e) {
    e.stopPropagation();
    this.props.handleDelete(this.props.id);
  }

  render() {
    const { paletteName, colors, emoji, classes, handleClick } = this.props;

    const miniColorBoxes = colors.map((color) => (
      <div
        key={color.name}
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
      ></div>
    ));

    return (
      <div className={classes.root} onClick={handleClick}>
        <div className={classes.delete}>
          <Delete
            className={classes.deleteIcon}
            style={{ transition: "all 0.3s ease-in-out" }}
            onClick={this.deletePalette}
          />
        </div>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
