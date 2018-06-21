import React from 'react';
import AllListsButton from "./AllListsButton";
import {API_URL} from "./common";
import ErrorAlert from "./ErrorAlert";
import FieldErrors from "./FieldErrors";

class AddItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      fieldErrors: new FieldErrors(),
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveList = this.saveList.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  saveList(event) {
    event.preventDefault();
    //let responseStatus = 0;

    fetch(API_URL + 'itemsList', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name
      })
    })
      /*.then(response => {
        responseStatus = response.status;
        return response.json()
      })
      .then(response => {
        switch (responseStatus) {
          case 201:
            console.log('success');
            return this.props.history.push('/');
          case 400:
            console.log('response ' + response);
            console.log('response.code ' + response.code);
            if (response.code === 'ValidationFailed') {
              // custom error messages from the API.
              console.log(response.fieldMessages);
            } else {
              console.log('this is a client (probably invalid JSON) error, but also might be a server error (bad JSON parsing/validation)')
            }
            break;
          case 500:
            console.log('server error, try again');
            break;
          default:
            console.log('unhandled');
            break;
        }
      })
      .catch(err => {
        console.error(err);
      });*/
      .then(function (response) {
        console.log('response1 ' + response);
        if (!response.ok) {
          console.log('response.statusText ' + response.statusText);
          throw Error(response.statusText);
        }
        return response;
      })
      .then(() => {
        console.log('success');
        return this.props.history.push('/');
      })
      .catch(function (error) {
        console.log('error: ' + error);
        this.setState({
          error: error
        });
    }.bind(this));
  }

  render() {
    const error = this.state.error;
    return (
      <div className="col-md-6 offset-md-3">
        {error && <ErrorAlert message={error.message}/>}
        <h1>Add a new shopping list</h1>
        <form method="post" className="form-horizontal" onSubmit={this.saveList}>
          <div className="form-group">
            <label htmlFor="name" className="col-sm-1 control-label">Name:</label>
            <div className="col-sm-6">
              <input type="text" id="name" value={this.state.name} onChange={this.handleChange}
                     className="form-control"/>
              {/*<small v-if="fieldErrors.has('name')" className="text-danger" v-text="fieldErrors.get('name')"></small>*/}
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-1 col-sm-10">
              <input type="submit" value="Add list" className="btn btn-outline-secondary"/>
            </div>
          </div>
        </form>

        <ul className="list-inline">
          <AllListsButton/>
        </ul>
      </div>
    );
  }
}

export default AddItemsList;