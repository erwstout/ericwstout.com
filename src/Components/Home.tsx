import React, { Component } from "react";
import { Helmet } from "react-helmet";
import HighlightedProjects from "./HighlightedProjects";
import Button from "./Button";
import EricPhoto from "../Assets/img/ericstout.jpg";

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
    };
    return (
      <div style={styles.container}>
        <Helmet>
          <title>Eric Stout | Front End Developer</title>
          <meta
            name="description"
            content="A JavaScript-loving front end developer"
          />
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <h1>
                Hello World,
                <br />
                My name is <span style={styles.teal}>Eric Stout.</span>
              </h1>
              <p>
                I love JavaScript, music, and video games and reside in Phoenix,
                Arizona. Currently I am a Software Engineer working with the
                outstanding folks at{" "}
                <a href="http://tryelevate.com" title="Elevate">
                  Elm Street Technology
                </a>
                , where I focus on creating great user experiences through
                creating and maintaining intuitive UI components and systems
                built in Node and React.
              </p>
              <h2 style={{ marginTop: `60px` }}>
                <span style={styles.pink}>{"//"}</span> Highlighted Project
                Snippets
              </h2>
              <HighlightedProjects
                link="https://github.com/elm-street-technology/elevate-ui"
                project="Elevate-UI"
                projectDescription="A React component library used at Elm Street Technology. (contributer)"
              />
              <HighlightedProjects
                link="https://github.com/erwstout/macCMS"
                project="macCMS (Working Title)"
                projectDescription="A CMS built with Node, React, and Postgres... Currently a work in progress."
              />
              <HighlightedProjects
                link="https://github.com/factor1/react-card-flipper"
                project="React Card Flipper"
                projectDescription="A React component library to achieve a card flip effect."
              />
              <HighlightedProjects
                link="https://github.com/erwstout/ginger"
                project="Ginger"
                projectDescription="Ginger is a grid framework built with flexbox and scss."
              />

              <Button
                url="/projects"
                text="View More Projects"
                internal={true}
              />
            </div>
            <div className="col-4 sm-hide">
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
