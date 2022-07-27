import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Palette } from "./Palette";
import { seedColors } from "./seedColors";

import { generatePalette } from "./colorHelpers";
import { PaletteList } from "./PaletteList";

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
            path="/"
            render={() => <PaletteList palettes={seedColors} />}
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
        </Switch>

        {/* <Palette palette={generatePalette(seedColors[4])} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
