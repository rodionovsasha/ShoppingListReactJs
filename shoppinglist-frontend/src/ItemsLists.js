import React from 'react';
import {API_URL} from './common';
import {Link} from 'react-router-dom';

class ItemsLists extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.deleteList = this.deleteList.bind(this);
  }

  deleteList(list) {
    if (window.confirm('Are you sure you want to delete this list?')) {
      fetch(API_URL + 'itemsList/' + list.id, {
        method: 'DELETE'
      }).then(
        () => {
          let index = this.props.lists.indexOf(list);
          this.setState({
            isLoaded: true,
            lists: this.props.lists.splice(index, 1)
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
  }

  render() {
    return (
      <ul className="list-unstyled">
        {this.props.lists.map(list =>
          <li key={list.id}>
            <p>
              <Link to={"/itemsList/" + list.id} className="btn btn-outline-secondary">{list.name}</Link>
              <Link to={"/editItemsList/" + list.id} className="btn btn-warning btn-sm mx-1">Edit</Link>
              <button className="btn btn-danger btn-sm" onClick={this.deleteList.bind(this, list)}>Delete</button>
            </p>
          </li>
        )}
      </ul>
    )
  }
}

export default ItemsLists;