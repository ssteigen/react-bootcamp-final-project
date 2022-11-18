import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import { generatePalette } from "./colorHelpers";
import NewPaletteForm from "./NewPaletteForm";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import { seedColors } from "./seedColors";
import SingleColorPalette from "./SingleColorPalette";

class App extends Component {
  constructor(props) {
    super(props);

    // Initial setup.
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

    // State.
    this.state = { palettes: savedPalettes || seedColors };

    // Bind functions.
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  /**
   * Find a palette by Id.
   *
   * @param {*} id
   *
   * @returns the corresponding palette.
   */
  findPalette(id) {
    return this.state.palettes.find((palette) => {
      return palette.id === id;
    });
  }

  /**
   * Delete palette with given id.
   *
   * @param {*} id
   */
  deletePalette(id) {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((palette) => palette.id !== id),
      }),
      this.syncLocalStorage
    );
  }

  /**
   * Save a new palette.
   *
   * @param {*} newPalette
   */
  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }

  /**
   * Save palettes to local storage.
   */
  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render() {
    const {palettes} = this.state;

    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => (
            <NewPaletteForm
              palettes={palettes}
              savePalette={this.savePalette}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList
              palettes={palettes}
              deletePalette={this.deletePalette}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          path="/palette/:paletteId/:colorId/"
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        {/* 404 Route */}
        <Route
          render={(routeProps) => (
            <PaletteList
              palettes={palettes}
              deletePalette={this.deletePalette}
              {...routeProps}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
