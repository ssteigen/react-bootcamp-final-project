import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Palette } from './Palette';
import { seedColors } from "./seedColors";

import {generatePalette} from "./colorHelpers";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <h1>Palette List Goes here</h1>}/>
          <Route exact path="/palette/:id" render={() => <h1>Individual palette goes here</h1>} />
        </Switch>

        {/* <Palette palette={generatePalette(seedColors[4])} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
