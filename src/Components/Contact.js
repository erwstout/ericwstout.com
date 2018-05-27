import React, { Component } from 'react';

class Contact extends Component {

  render() {

    const styles = {
      container: {
        minHeight: `50vh`
      }
    }

    return (
      <div className="container container--justify-content-center" style={styles.container}>
        <div className="row">
          <div className="col-10 col-centered text-center">
            <h2>
              hello@ericwstout.com
            </h2>
            <h2>
              <a href="http://twitter.com/erwstout" title="Eric Stout on Twitter"> @erwstout</a>
            </h2>
          </div>
        </div>
      </div>
    );
  }

}

export default Contact;
