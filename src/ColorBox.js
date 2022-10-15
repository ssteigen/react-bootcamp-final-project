import React, { Component } from "react";

import { withStyles } from "@material-ui/styles";

import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import "./ColorBox.css";

const styles = {
  ColorBox: {
    cursor: "pointer",
    display: "inline-block",
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    position: "relative",
    verticalAlign: "top" /* fixes weird gap between rows */,
    width: "20%",
    "&:hover button": {
      opacity: 1,
      transition: "0.5s",
    },
  },
  boxContent: {
    bottom: 0,
    color: (props) =>
      chroma(props.background).luminance() >= 0.08 ? "black" : "white",
    fontSize: "12px",
    left: 0,
    letterSpacing: "1px",
    padding: "10px",
    position: "absolute",
    textTransform: "uppercase",
    width: "100%",
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.08 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.08 ? "black" : "white",
  },
  seeMore: {
    background: "rgba(255, 255, 255, 0.3)",
    bottom: 0,
    color: (props) =>
      chroma(props.background).luminance() >= 0.08 ? "black" : "white",
    height: "30px",
    lineHeight: "30px",
    position: "absolute",
    right: 0,
    textAlign: "center",
    textTransform: "uppercase",
    width: "60px",
  },
  copyButton: {
    background: "rgba(255, 255, 255, 0.3)",
    border: "none",
    color: (props) =>
      chroma(props.background).luminance() >= 0.08 ? "black" : "white",
    display: "inline-block",
    fontSize: "1rem",
    height: "30px",
    left: "50%",
    lineHeight: "30px",
    marginLeft: "-50px" /* half the width of the button */,
    marginTop: "-15px" /* half the height of the button */,
    position: "absolute",
    textAlign: "center",
    textDecoration: "none",
    textTransform: "uppercase",
    top: "50%",
    width: "100px",
    opacity: 0,
  },
  copyOverlay: {
    height: "100%",
    opacity: 0,
    transition: "transform 0.6s ease-in-out",
    width: "100%",
    zIndex: "0",
  },
  showOverlay: {
    opacity: 1,
    position: "absolute",
    transform: "scale(50)",
    zIndex: 10,
  },
  copyMessage: {
    alignItems: "center",
    bottom: 0,
    color: "white",
    display: "flex",
    flexDirection: "column",
    fontSize: "3rem",
    justifyContent: "center",
    left: 0,
    opacity: 0,
    position: "fixed",
    right: 0,
    top: 0,
    transform: "scale(0.1)",
    "& h1": {
      background: 'rgba(255, 255, 255, 0.2)',
      fontWeight: 400,
      margin: 0,
      padding: '1rem',
      textAlign: 'center',
      textShadow: '1px 2px black',
      textTransform: 'uppercase',
      width: '100%',
    },
    "& p": {
      fontSize: '2rem',
      fontWeight: 100,
    }
  },
  showMessage: {
    transform: "scale(1)",
    transitionDelay: "0.1s",
    transition: "all 0.4s ease-in-out",
    zIndex: 25,
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };

    this.changeCopyState = this.changeCopyState.bind(this);
  }
  k;

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, background, moreUrl, showingFullPalette, classes } =
      this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className={classes.ColorBox}>
          <div
            style={{ background: background }}
            className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
          />
          <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
