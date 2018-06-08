import React, {Component} from 'react';
import ItemsLists from './ItemsLists';
import ErrorAlert from './ErrorAlert';
import Loading from './Loading';

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
      return <Loading/>;
    }

    if (error) {
      return <ErrorAlert message={error.message}/>;
    } else {
      return (
        <div className="col-md-6 offset-md-3">
          <h1>Shopping lists</h1>
          <ItemsLists lists={lists}/>
          <a href="/addItemsList" className="btn btn-success btn-sm">Add</a>
        </div>
      );
    }
  }
}

export default ShoppingList;
