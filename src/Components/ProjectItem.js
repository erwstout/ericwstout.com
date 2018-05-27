import React, { Component } from 'react';
import Button from './Button';

class ProjectItem extends Component {

  render() {

    const styles = {
      keyword: {
        display: `inline-block`,
        margin: `0 8px 0 0`,
        fontSize: `11px`,
        color: `rgb(185, 185, 185)`
      },
      text: {
        marginBottom: `60px`
      },
      column: {
        marginBottom: `80px`
      }
    }
    return (
      <div className="col" style={styles.column}>
        <h2>
          <a href={this.props.url} title={this.props.name}>
            {this.props.name}
          </a>
        </h2>
        {this.props.keywords.map( (keyword, i) => {
          return <span key={`keyword${i}`} style={styles.keyword}>{keyword}</span>
        })}
        <p style={styles.text}>
          {this.props.description}
        </p>
        <Button url={this.props.url} text="View Project" />
      </div>
    );
  }

}

export default ProjectItem;
