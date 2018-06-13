import React from 'react';
import {API_URL} from "./common";
import ErrorAlert from "./ErrorAlert";
import Loading from "./Loading";
import {Link} from 'react-router-dom';

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      list: []
    };
  }

  componentDidMount() {
    this.loadList();
  }

  loadList() {
    fetch(API_URL + 'itemsList/' + this.props.match.params.listId, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            list: result
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
    const {error, isLoaded, list} = this.state;
    if (!isLoaded) {
      return <Loading/>;
    }

    if (error) {
      return <ErrorAlert message={error.message}/>;
    } else {
      return (
        <div className="col-md-6 offset-md-3">
          <div className="list-group">
            <h1 className="list-group-item list-group-item-info">{list.name} <span className="badge badge-light">{list.items.length}</span></h1>
            {list.items.map(item =>
              <div className={"list-group-item" + (item.bought ? ' list-group-item-success' : '')} key={item.id}>
                <div className="row">
                  <div className="col-md-7">
                    <Link to={"/item/" + item.id}>{item.name}</Link>
                    {item.comment && <small className="d-block clearfix">{item.comment}</small>}
                  </div>
                  <div className="col-md-5">
                    <ul className="list-inline text-right">
                      <li className="list-inline-item">
                        <a href="" className="badge badge-success" role="button">
                          {item.bought ? 'Take out' : 'Buy'}
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <Link to={"/editItem/" + item.id} className="badge badge-warning" role="button">Edit</Link>
                      </li>
                      <li className="list-inline-item">
                        <a href="" className="badge badge-danger" role="button">Delete</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to={"/addItem/" + list.id} className="btn btn-success btn-sm" role="button" data-toggle="tooltip" data-placement="bottom" title="Add a new item">
                <span className="oi oi-plus"></span>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to={"/editItemsList/" + list.id} className="btn btn-warning btn-sm" role="button" data-toggle="tooltip" data-placement="bottom" title="Edit list">
                <span className="oi oi-pencil"></span>
              </Link>
            </li>
            <li className="list-inline-item">
              <button className="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="bottom" title="Delete list">
                <span className="oi oi-x"></span>
              </button>
            </li>
            <li className="list-inline-item">
              <Link to="/" className="btn btn-info btn-sm" role="button" data-toggle="tooltip" data-placement="bottom" title="All lists">
                <span className="oi oi-list"></span>
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default ItemsList;