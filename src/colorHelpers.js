import chroma from "chroma-js";
import { slugify } from "./utilities";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

// Generate an array of [darkened color, color, white].
function getRange(hexColor) {
  const end = "#fff";

  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

// Generate a color scale with a given color.
function getScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

export function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();

    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: slugify(color.name),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }

  return newPalette;
}
