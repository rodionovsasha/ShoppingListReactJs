import React from 'react';

class ErrorAlert extends React.Component {
  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="alert alert-danger" role="alert">
          <strong>{this.props.message}</strong>
        </div>
      </div>
    )
  }
}

export default ErrorAlert;