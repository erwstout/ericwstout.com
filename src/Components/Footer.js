import React, { Component } from 'react';

class Footer extends Component {

  render() {

    const styles = {
      container: {
        padding: `60px 0 30px`
      },
      text: {
        fontSize: `14px`,
        color: `rgb(185, 185, 185)`
      }
    }

    return (
      <footer className="container" style={styles.container}>
        <div className="row">
          <div className="col-12">
            <hr />
            <p style={styles.text}>
              &copy; {new Date().getFullYear()} Eric Stout | This site was built using React, React Router, and hosted with Google Firebase.
              &nbsp;
              <a href="https://github.com/erwstout/ericwstout.com" title="View ericwstout.com on GitHub">
                View the source code GitHub.
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
