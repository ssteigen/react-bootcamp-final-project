import React from "react";

import { SortableContainer } from "react-sortable-hoc";

import DraggableColorBox from "./DraggableColorBox";
import { slugify } from "./utilities";

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors && colors.map((color, index) => (
        <DraggableColorBox
          index={index}
          key={slugify(color.name)}
          color={color.color}
          name={color.name}
          handleClick={() => removeColor(color.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
