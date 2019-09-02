import React, { Component } from 'react';

class Social extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height: 0
    }
  }

  getContainerHeight() {
    const container = document.getElementById('social-container');
    const height = container.offsetHeight;
    this.setState({height});
  }

  componentDidMount() {
    this.getContainerHeight();
  }

  render() {
    const styles = {
      container: {
        display: `flex`,
        position: `fixed`,
        top: `50%`,
        left: `45px`,
        marginTop: `-${(this.state.height / 2)}px`,
        flexFlow: `column`,
        justifyContent: `space-between`,
        alignItems: 'center',
        zIndex: `999`
      },
      icon: {
        marginBottom: `25px`,
        fontSize: `24px`
      }
    }
    return (
      <div id="social-container" style={styles.container}>
        <a href="https://github.com/erwstout" title="Eric Stout on GitHub">
          <i className="fab fa-github" style={styles.icon}></i>
        </a>
        <a href="https://codepen.io/erwstout/" title="Eric Stout on Codepen">
          <i className="fab fa-codepen" style={styles.icon}></i>
        </a>
        <a href="https://twitter.com/erwstout" title="Eric Stout on Twitter">
          <i className="fab fa-twitter" style={styles.icon}></i>
        </a>
        <a href="https://medium.com/@erwstout" title="Eric Stout on Medium">
          <i className="fab fa-medium" style={styles.icon}></i>
        </a>
        <a href="https://www.linkedin.com/in/eric-stout-a5868879/" title="Eric Stout on LinkedIn">
          <i className="fab fa-linkedin" style={styles.icon}></i>
        </a>
        <a href="https://instagram.com/erwstout" title="Eric Stout on Instagram">
          <i className="fab fa-instagram" style={styles.icon}></i>
        </a>
        <a href="https://www.last.fm/user/buschschwick" title="Eric Stout on Last.fm">
          <i className="fab fa-lastfm" style={styles.icon}></i>
        </a>
      </div>
    );
  }

}

export default Social;
