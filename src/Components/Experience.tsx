import React, { Component } from "react";
import { Helmet } from "react-helmet";

const Experience: React.FC = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Experience | Eric Stout - Front End Developer</title>
        <meta name="description" content="Experience, education, and skills" />
      </Helmet>
      <div className="row">
        <div className="col-8">
          <h1>
            <span style={styles.pink}>{"//"}</span> Experience
          </h1>
          <h2 style={{ marginTop: `80px` }}>Work History</h2>
          <hr />
          <h3>Senior Front End Engineer - Asurion</h3>
          <h4>June 2019 - present</h4>
          <p>
            As a Senior Front End Engineer at Asurion, my role is to create,
            maintain, and implement component libraries and CMS systems as well
            as create advanced interactive articles and content. Leading a team
            of other developers I lead sprint meetings, facilitate code reviews,
            and manage workloads and assignments for myself and the rest of the
            team.
          </p>
          <hr />
          <h3>Software Engineer - Elm Street Technology</h3>
          <h4>July 2018 - June 2019</h4>
          <p>
            At Elm Street Technology I use my skills in JavaScript/Node and
            frameworks like React to create amazing user experiences for both
            our clients, and their clients. My day to day consistes of
            maintaining and creating a component library called{" "}
            <a
              href="http://github.com/elm-street-technology/elevate-ui/"
              title="Elevate UI"
            >
              Elevate UI
            </a>
            , as well as continued work on our{" "}
            <a href="http://tryelevate.com" title="Elevate">
              Elevate
            </a>{" "}
            platform.
          </p>
          <hr />
          <h3>Senior Developer - Factor1 Studios</h3>
          <h4>September 2014 - July 2018</h4>
          <p>
            My role at factor1 included creating tools and processes for junior
            developers to succeed, doing code reviews, quoting project hours,
            interacting with clients and other agencies, as well as using my
            HTML, SCSS/CSS, PHP, JavaScript, and React skills to create amazing
            user experiences and marketing tools.
          </p>
          <h2 style={{ marginTop: `80px` }}>Education</h2>
          <hr />
          <h3>
            B.S. Graphic Information Technology - Arizona State University
          </h3>
          <h2 style={{ marginTop: `80px` }}>Technical Skills</h2>
          <hr />
          <ul style={styles.list}>
            <li>html/css/scss</li>
            <li>git</li>
            <li>command line</li>
            <li>npm / yarn</li>
            <li>javascript / jQuery / node</li>
            <li>react</li>
            <li>express</li>
            <li>postgres</li>
            <li>wordpress</li>
            <li>php</li>
            <li>photoshop</li>
            <li>illustrator</li>
            <li>sketch</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pink: {
    color: `rgb(223, 81, 121)`
  },
  list: {
    marginLeft: `0`,
    paddingLeft: `16px`
  }
};

export default Experience;
