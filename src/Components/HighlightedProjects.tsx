import React, { Component } from 'react';

class HighlightedProjects extends Component {

  render() {
    return (
      <div style={{marginBottom: `30px`}}>
        <h3>
          <a href={this.props.link} title={this.props.project}>
            {this.props.project}
          </a>
        </h3>
        <p>
          {this.props.projectDescription}
        </p>
      </div>
    );
  }

}

export default HighlightedProjects;
