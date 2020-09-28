import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header/header.component';
import Customize from './components/Customize/customize.component';


function App() {

  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  return (
    <div>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Customize ingredients={ingredients} setIngredients={setIngredients}/></Route>
        <Route exact path='/checkout'>bhj</Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
