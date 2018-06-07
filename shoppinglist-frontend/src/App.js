import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <h1>Shopping lists</h1>
        <ul className="list-unstyled">
          <li>
            <p>
              <a href="/itemsList/1" className="btn btn-outline-secondary">Shopping list 1</a>
              <a href="/editItemsList/1" className="btn btn-warning btn-sm">Edit</a>
              <a href="" className="btn btn-danger btn-sm">Delete</a>
            </p>
          </li>
          <li>
            <p>
              <a href="/itemsList/2" className="btn btn-outline-secondary">Shopping list 2</a>
              <a href="/editItemsList/2" className="btn btn-warning btn-sm">Edit</a>
              <a href="" className="btn btn-danger btn-sm">Delete</a>
            </p>
          </li>
          <li>
            <p>
              <a href="/itemsList/3" className="btn btn-outline-secondary">Shopping list 3</a>
              <a href="/editItemsList/3" className="btn btn-warning btn-sm">Edit</a>
              <a href="" className="btn btn-danger btn-sm">Delete</a>
            </p>
          </li>
        </ul>
        <a href="/addItemsList" className="btn btn-success btn-sm">Add</a></div>
    );
  }
}

export default App;
