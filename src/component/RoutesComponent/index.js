import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Tiles from '../TilesComponent';

function Index() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Tiles} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default Index;