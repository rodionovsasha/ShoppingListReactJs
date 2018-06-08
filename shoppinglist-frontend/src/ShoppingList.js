import React, {Component} from 'react';

const apiUrl = "http://localhost:8090/api/v1/";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      lists: []
    };
  }

  componentDidMount() {
    this.loadLists();
  }

  loadLists() {
    fetch(apiUrl, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            lists: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const {error, isLoaded, lists} = this.state;
    if (!isLoaded) {
      return <div className="col-md-6 offset-md-3">Loading...</div>;
    } else if (error) {
      return (
        <div className="col-md-6 offset-md-3">
          <div className="alert alert-danger" role="alert">
            <strong>{error.message}</strong>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-md-6 offset-md-3">
          <h1>Shopping lists</h1>
          <ul className="list-unstyled">
            {lists.map(list =>
              <li>
                <p>
                  <a href={"/itemsList/" + list.id} className="btn btn-outline-secondary">{list.name}</a>
                  <a href={"/editItemsList/" + list.id} className="btn btn-warning btn-sm">Edit</a>
                  <a href={"/deleteItemsList/" + list.id} className="btn btn-danger btn-sm">Delete</a>
                </p>
              </li>
            )}
          </ul>
          <a href="/addItemsList" className="btn btn-success btn-sm">Add</a>
        </div>
      );
    }
  }
}

export default ShoppingList;
