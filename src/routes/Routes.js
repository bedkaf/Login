import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import login from '../pages/login';
import Principal from '../pages/Principal';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={login}/> 
        <Route exact path="/Principal" component={Principal}/>
      </Switch>
    </BrowserRouter>
  );
}

