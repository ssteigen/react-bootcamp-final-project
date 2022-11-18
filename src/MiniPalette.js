import React, { PureComponent } from "react";

import { Delete } from "@material-ui/icons";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  handleClick() {
    this.props.goToPalette(this.props.id);
  }

  deletePalette(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  render() {
    const { paletteName, colors, emoji, classes } = this.props;
    console.log('RENDERING: ', paletteName);

    const miniColorBoxes = colors.map((color) => (
      <div
        key={color.name}
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
      ></div>
    ));

    return (
      <div className={classes.root} onClick={this.handleClick}>
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
