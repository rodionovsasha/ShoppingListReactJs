import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingList from './ShoppingList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ShoppingList/>, document.getElementById('container'));
registerServiceWorker();
