import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Picker } from "emoji-mart";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPaletteName: "",
      stage: "form",
    };

    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  showEmojiPicker() {
    this.setState({ stage: "emoji" });
  }

  savePalette(emoji) {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native,
    };
    this.props.handleSubmit(newPalette);
  }

  render() {
    const { hideForm } = this.props;
    const { newPaletteName, stage } = this.state;

    return (
      <>
        <Dialog
          open={stage === "emoji"}
          onClose={hideForm}
          aria-labelledby="form-dialog-title-emoji"
        >
          <DialogTitle id="form-dialog-title-emoji">Choose a Palette Emoji</DialogTitle>

          <DialogContent>
            <Picker onSelect={this.savePalette} title="Pack a Palette Emoji"/>
          </DialogContent>

          <DialogActions>
            <Button onClick={hideForm} color="default">
              Cancel
            </Button>

            <Button type="submit" variant="contained" color="primary">
              Save Palette
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={stage === "form"}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your beautiful new palette. Make sure
                it's unique!
              </DialogContentText>

              <TextValidator
                label="Palette Name"
                name="newPaletteName"
                fullWidth
                margin="normal"
                value={newPaletteName}
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Palette name is required",
                  "Palette name already used",
                ]}
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={hideForm} color="default">
                Cancel
              </Button>

              <Button type="submit" variant="contained" color="primary">
                Next
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </>
    );
  }
}

export default PaletteMetaForm;
