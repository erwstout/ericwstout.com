import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Contact extends Component {

  render() {

    const styles = {
      container: {
        minHeight: `50vh`
      }
    }

    return (
      <div className="container container--justify-content-center" style={styles.container}>
        <Helmet>
          <title>Contact | Eric Stout - Front End Developer</title>
          <meta name="description" content="Get in touch with an amazing front end developer" />
        </Helmet>
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
