import React from "react";

import { Delete } from "@material-ui/icons";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles/MiniPaletteStyles";

function MiniPalette(props) {
  const { paletteName, colors, emoji, classes } = props;

  const miniColorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    ></div>
  ));

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.delete}>
        <Delete
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
        />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
