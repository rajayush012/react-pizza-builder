import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header/header.component';
import Customize from './components/Customize/customize.component';
import Checkout from './components/Checkout/checkout.component';


function App() {

  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  useEffect(()=>{
   // localStorage.clear();
    const data = localStorage.getItem('ingredients')
    setIngredients(JSON.parse(data));
  },[])

  return (
    <div>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Customize ingredients={ingredients} setIngredients={setIngredients}/></Route>
        <Route exact path='/checkout'><Checkout ingredients={ingredients} setIngredients={setIngredients}/></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
