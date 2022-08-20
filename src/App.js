import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Palette } from "./Palette";
import { seedColors } from "./seedColors";

import { generatePalette } from "./colorHelpers";
import { PaletteList } from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

function findPalette(id) {
  return seedColors.find((palette) => {
    return palette.id === id;
  });
}
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
        <Route
          path="/palette/:paletteId/:colorId/"
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
