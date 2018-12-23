import React, {Component} from 'react';
import {API_URL} from './common';
import ItemsLists from './ItemsLists';
import ErrorAlert from './ErrorAlert';
import Loading from './Loading';
import {Link} from 'react-router-dom';

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
    fetch(API_URL, {
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
            error: error
          });
        }
      );
  }

  render() {
    const {error, isLoaded, lists} = this.state;
    if (!isLoaded) {
      return <Loading/>;
    }

    if (error) {
      return <ErrorAlert message={error.message}/>;
    }

    return (
      <div className="col-md-6 offset-md-3">
        <h1>Shopping lists</h1>
        <ItemsLists lists={lists}/>
        <Link to="/addItemsList" className="btn btn-success btn-sm">Add</Link>
      </div>
    );
  }
}

export default ShoppingList;
