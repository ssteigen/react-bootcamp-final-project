import React from "react";

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
};

function DraggableColorBox(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
