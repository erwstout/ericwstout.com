import React, { Component } from 'react';

class Alert extends Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     show: this.props.show
  //   }
  // }

  render() {

    const styles = {
      alert: {
        position: `fixed`,
        right: `0`,
        bottom: `30px`,
        padding: `8px 12px`,
        backgroundColor: `rgb(223, 81, 121)`,
        color: `white`,
        zIndex: `999`,
        transform: `scaleX(0)`,
        transformOrigin: `right`,
        transition: `transform 500ms cubic-bezier(.8,.07,.1,1.51)`
      },
      alertActive: {
        position: `fixed`,
        right: `0`,
        bottom: `30px`,
        padding: `8px 12px`,
        backgroundColor: `rgb(223, 81, 121)`,
        color: `white`,
        zIndex: `999`,
        transform: `scaleX(1)`,
        transformOrigin: `right`,
        transition: `transform 500ms cubic-bezier(.8,.07,.1,1.51)`
      },
      link: {
        fontFamily: `'Space Mono', monospace`,
        color: `white`
      },
      icon: {
        marginRight: `10px`,
        cursor: `pointer`
      }
    }

    return (
      <div style={this.props.show ? styles.alertActive : styles.alert}>
        <i className="far fa-times-circle" style={styles.icon} onClick={() => this.props.closeAlert()} />
        <a href="https://github.com/erwstout/ericwstout.com" title="View this site on GitHub" style={styles.link}>
          View the source code of this site on GitHub
        </a>
      </div>
    );
  }

}

export default Alert;
