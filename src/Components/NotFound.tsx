import React, { Component } from 'react';
import ErrorGif from '../Assets/img/404.gif';

class NotFound extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-centered text-center">
            <h2>404 - Page Not Found</h2>
            <img src={ErrorGif} alt="404, Page Not Found" />
            <p>C'mon, don't bum out Stout.</p>
          </div>
        </div>
      </div>
    );
  }

}

export default NotFound;
