import chroma from "chroma-js";

const styles = {
  root: {
    cursor: "pointer",
    display: "inline-block",
    height: "25%",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
    width: "20%",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
    },
  },
  boxContent: {
    bottom: 0,
    color: (props) =>
      chroma(props.color).luminance() >= 0.08 ? "black" : "white",
    fontSize: "12px",
    left: 0,
    letterSpacing: "1px",
    padding: "10px",
    position: "absolute",
    textTransform: "uppercase",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};

export default styles;
