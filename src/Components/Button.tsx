/**
 * Button Component
 *
 * Props:
 * text (string - text to appear in the button)
 * url (string - url to set as the destination)
 * internal (boolean - set to true to use Link component)
 **/

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { string } from "prop-types";

interface Props {
  url: string;
  internal?: boolean;
  text: string;
}

const Button: React.FC<Props> = ({ url, internal, text }: Props) => {
  if (internal) {
    return (
      <Link to={url} className="button">
        {text}
      </Link>
    );
  } else {
    return (
      <a href={url} className="button">
        {text}
      </a>
    );
  }
};

export default Button;
