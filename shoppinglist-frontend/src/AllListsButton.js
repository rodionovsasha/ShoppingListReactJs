import React from 'react';
import {Link} from 'react-router-dom';

class AllListsButton extends React.Component {
  render() {
    return (
      <li className="list-inline-item">
        <Link to="/" className="btn btn-info btn-sm" role="button" data-toggle="tooltip" data-placement="bottom" title="All lists">
          <span className="oi oi-list"></span>
        </Link>
      </li>
    )
  }
}

export default AllListsButton;