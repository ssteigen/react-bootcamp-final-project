import React from "react";

import "./MiniPalette.css";

export default function MiniPalette(props) {
  const { paletteName, colors, emoji } = props;

  const miniColorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className="MiniPalette-miniColor"
      style={{ backgroundColor: color.color }}
    ></div>
  ));

  return (
    <div className="MiniPalette" onClick={props.handleClick}>
      <div className="MiniPalette-colors">{miniColorBoxes}</div>
      <h5 className="MiniPalette-title">
        {paletteName} <span className="MiniPalette-emoji">{emoji}</span>
      </h5>
    </div>
  );
}
