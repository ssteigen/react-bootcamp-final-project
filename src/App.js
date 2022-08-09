import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/palette/new"
            render={() => <NewPaletteForm />}
          />
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
                palette={generatePalette(
                  findPalette(routeProps.match.params.id)
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
                  findPalette(routeProps.match.params.paletteId)
                )}
              />
            )}
          />
        </Switch>

        {/* <Palette palette={generatePalette(seedColors[4])} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
