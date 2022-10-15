export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  logo: {
    marginRight: "1em",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontWeight: "bold",
    "& a": {
      padding: "1em",
      textDecoration: "none",
      color: "inherit",
    },
  },
  sliderContainer: {
    display: "flex",
    alignItems: "center",
  },
  slider: {
    width: "340px",
    margin: "1em",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":
      {
        backgroundColor: "purple",
        outline: "none",
        border: "none",
        marginTop: "-3px",
      },
  },
  selectContainer: {
    marginLeft: "auto",
  },
};
