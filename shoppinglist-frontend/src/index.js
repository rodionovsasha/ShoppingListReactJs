import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingList from './ShoppingList';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import ItemsList from "./ItemsList";
import AddItemsList from "./AddItemsList";

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ShoppingList}/>
      <Route path='/itemsList/:listId' component={ItemsList}/>
      <Route exact path='/addItemsList' component={AddItemsList}/>
    </Switch>
  </BrowserRouter>, document.getElementById('container'));
registerServiceWorker();
