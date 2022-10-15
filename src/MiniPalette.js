import React from "react";

import withStyles from "@material-ui/styles/withStyles";

import MiniPaletteStyles from "./styles/MiniPaletteStyles";

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
    <div className={classes.MiniPalette} onClick={props.handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(MiniPaletteStyles)(MiniPalette);
