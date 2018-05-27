/**
 * Button Component
 *
 * Props:
 * text (string - text to appear in the button)
 * url (string - url to set as the destination)
 * internal (boolean - set to true to use Link component)
**/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {

  render() {
    if( this.props.internal ) {
      return (
        <Link to={this.props.url} className="button">
          {this.props.text}
        </Link>
      )
    } else {
      return(
        <a href={this.props.url} className="button">
          {this.props.text}
        </a>
      )
    }
  }
}

export default Button;
