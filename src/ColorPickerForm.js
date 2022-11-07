import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: "teal",
      newColorName: "",
    };

    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isColorUnique", () => {
      return this.props.colors.every(
        ({ color }) => color !== this.state.currentColor
      );
    });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };

    this.props.addColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;

    return (
      <div className={classes.picker}>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            className={classes.colorNameInput}
            name="newColorName"
            variant="filled"
            margin="normal"
            placeholder="Color Name"
            value={newColorName}
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Color name is required",
              "Color name must be unique",
              "Color already used",
            ]}
          />
          <Button
            className={classes.addColor}
            variant="contained"
            type="submit"
            color="primary"
            disabled={paletteIsFull}
            style={{
              backgroundColor: paletteIsFull ? "gray" : currentColor,
            }}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
