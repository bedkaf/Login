import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import login from '../pages/login';
import main from '../pages/main';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={login}/> 
        <Route exact path="/main" component={main}/>
      </Switch>
    </BrowserRouter>
  );
}

