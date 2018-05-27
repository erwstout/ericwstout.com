import React, { Component } from 'react';
import HighlightedProjects from './HighlightedProjects';
import Button from './Button';
import EricPhoto from '../Assets/img/ericstout.jpg';

class Home extends Component {

  render() {
    const styles = {
      container: {
        width: `100%`
      },
      teal: {
        color: `#53f6c7`
      },
      pink: {
        color: `rgb(223, 81, 121)`
      },
      image: {
        borderBottom: `10px solid black`,
        borderRight: `10px solid black`
      }
    }
    return (
      <div style={styles.container}>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <h1>
                Hello World,<br />
              My name is <span style={styles.teal}>Eric Stout.</span>
              </h1>
              <p>
                I am a JavaScript-loving front end developer currently living in Phoenix, Arizona.
                Right now I am the Senior Developer with the fine folks at <a href="http://factor1studios.com" title="Factor1 Studios">factor1</a>, where
                I lead a small team of developers that deliver fast & intuitive websites that are easily maintained for
                both developers and clients while also building tools and processes to set us up for a successful project.
              </p>
              <h2 style={{marginTop: `60px`}}>
                <span style={styles.pink}>{'//'}</span> Highlighted Project Snippets
              </h2>
              <HighlightedProjects
                link="https://github.com/erwstout/ginger"
                project="Ginger"
                projectDescription="Ginger is a grid framework built with flexbox and scss."
              />
              <HighlightedProjects
                link="https://github.com/factor1/prelude-wp"
                project="Prelude"
                projectDescription="Prelude is a WordPress starting point that can be installed via npm and uses gulp to compress, minify, and more..."
              />
              <HighlightedProjects
                link="https://github.com/factor1/react-card-flipper"
                project="React Card Flipper"
                projectDescription="A React component library to achieve a card flip effect."
              />
            <Button
              url="/projects"
              text="View More Projects"
              internal={true}
            />
            </div>
            <div className="col-5 sm-hide">
              <div className="image-accent">
                <img src={EricPhoto} alt="Eric Stout" style={styles.image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;
