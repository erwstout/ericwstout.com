import React, { Component } from 'react';

class Experience extends Component {

  render() {

    const styles = {
      pink: {
        color: `rgb(223, 81, 121)`
      },
      list: {
        marginLeft: `0`,
        paddingLeft: `16px`
      }
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>
              <span style={styles.pink}>{'//'}</span> Experience
            </h1>
            <h2 style={{marginTop: `80px`}}>
              Work History
            </h2>
            <hr />
            <h3>Senior Developer - Factor1 Studios</h3>
            <h4>September 2014 - Present</h4>
            <p>
              My role at factor1 includes creating tools and processes for junior developers
              to succeed, doing code reviews, quoting project hours, interacting with clients and other agencies, as
              well as using my HTML, SCSS/CSS, PHP, JavaScript, and React skills to create
              amazing user experiences and marketing tools.
            </p>
            <h2 style={{marginTop: `80px`}}>
              Education
            </h2>
            <hr />
            <h3>
              B.S. Graphic Information Technology - Arizona State University
            </h3>
            <h2 style={{marginTop: `80px`}}>
              Technical Skills
            </h2>
            <hr />
            <ul style={styles.list}>
              <li>
                html/css/scss
              </li>
              <li>
                git
              </li>
              <li>
                command line
              </li>
              <li>
                npm / yarn
              </li>
              <li>
                javascript / jQuery
              </li>
              <li>
                react
              </li>
              <li>
                express
              </li>
              <li>
                wordpress
              </li>
              <li>
                php
              </li>
              <li>
                photoshop
              </li>
              <li>
                illustrator
              </li>
              <li>
                sketch
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Experience;
