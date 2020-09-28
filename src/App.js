import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header/header.component';
import Customize from './components/Customize/customize.component';


function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Customize} />
        <Route exact path='/checkout'></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
