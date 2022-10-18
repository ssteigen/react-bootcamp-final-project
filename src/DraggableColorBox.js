import React from "react";

import { Delete } from "@material-ui/icons";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  root: {
    cursor: "pointer",
    display: "inline-block",
    height: "25%",
    margin: "0 auto",
    position: "relative",
    verticalAlign: "top" /* fixes weird gap between rows */,
    width: "20%",
  },
  boxContent: {
    bottom: 0,
    color: "black",
    fontSize: "12px",
    left: 0,
    letterSpacing: "1px",
    padding: "10px",
    position: "absolute",
    textTransform: "uppercase",
    width: "100%",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
    },
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",

  },
};

function DraggableColorBox(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <Delete className={classes.deleteIcon} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
