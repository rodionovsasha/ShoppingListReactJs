import React from 'react';

class ItemsLists extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.lists.map(list =>
          <li key={list.id}>
            <p>
              <a href={"/itemsList/" + list.id} className="btn btn-outline-secondary">{list.name}</a>
              <a href={"/editItemsList/" + list.id} className="btn btn-warning btn-sm">Edit</a>
              <a href={"/deleteItemsList/" + list.id} className="btn btn-danger btn-sm">Delete</a>
            </p>
          </li>
        )}
      </ul>
    )
  }
}

export default ItemsLists;