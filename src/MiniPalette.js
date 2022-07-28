import React from "react";
import "./MiniPalette.css";

export default function MiniPalette(props) {
  const { paletteName, emoji } = props;

  return (
    <div className="MiniPalette">
      <div className="MiniPalette-colors"></div>
      <h5 className="MiniPalette-title">
        {paletteName} <span className="MiniPalette-emoji">{emoji}</span>
      </h5>
    </div>
  );
}
