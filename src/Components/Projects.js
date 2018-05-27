import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  constructor(props) {
    super(props);

    const projects = [
      {
        name: 'Ginger',
        url: 'https://github.com/erwstout/ginger',
        keywords: [
          'scss',
          'framework',
          'open source'
        ] ,
        description: `Ginger is a flexbox based grid system built with scss. It's lightweight and easy to use, allowing anyone to get up and running quickly`
      },
      {
        name: 'Prelude',
        url: 'https://github.com/factor1/prelude-wp',
        keywords: [
          'npm',
          'php',
          'scss',
          'gulp',
          'node',
          'npm',
          'javascript',
          'open source'
        ] ,
        description: `Prelude is a WordPress starter theme that I heavily work on at factor1. We use it on every WordPress project and it allows developers to minify code, compress images, and more. It is open source and available to use by installing from npm or downloading from GitHub.`
      },
      {
        name: 'React Card Flipper',
        url: 'https://github.com/factor1/react-card-flipper',
        keywords: [
          'react',
          'javascript',
          'es6',
          'webpack',
          'open source'
        ] ,
        description: `React Card Flipper is a React component library to achieve a "card flip" animation. It's accepts many options and supports modern browsers.`
      },
      {
        name: 'Nifty Nav 2',
        url: 'https://github.com/factor1/nifty-nav-2',
        keywords: [
          'javascript',
          'es6',
          'webpack',
          'open source'
        ] ,
        description: `Our go to javascript mobile menu library at factor1. Nifty Nav 2 is the second iteration and throws out jQuery in favor of ES6.`
      },
      {
        name: 'Tallwave.com',
        url: 'https://tallwave.com',
        keywords: [
          'javascript',
          'es6',
          'react',
          'react router',
          'node',
          'express',
          'heroku',
          'wordpress',
          'api'
        ] ,
        description: `Front end and backend work for tallwave.com. Running on a headless WordPress install, Tallwave's front end React app runs on an Express server hosted at Heroku. The app also contains multiple API requests for careers and dynamic content. Designed by Tallwave & developed while working at factor1.`
      },
      {
        name: 'Node MLB Api',
        url: 'https://github.com/erwstout/node-mlb-api',
        keywords: [
          'javascript',
          'node',
          'es6',
          'open source',
          'api'
        ] ,
        description: `A work in progress, node-mlb-api is a node wrapper for the Major League Baseball Stats API which delivers up to the minute scores and statistics.`
      },
      {
        name: 'Better Rest Endpoints',
        url: 'https://github.com/factor1/better-rest-endpoints',
        keywords: [
          'wordpress plugin',
          'php',
          'rest',
          'open source',
          'api'
        ] ,
        description: `The WordPress Rest API is a great tool for a detatched front end, however, the API returns lots of unused data. Enter Better Rest Endpoints. It slims down the API responses and gives the developer greater control over the data that is returned.`
      },
      {
        name: 'Cost Of A Slow Website',
        url: 'https://costofaslowwebsite.com',
        keywords: [
          'react',
          'material ui',
          'rest',
          'api'
        ] ,
        description: `Still under development, but secretly live. This project was built with React while working at factor1 to generate leads by using the GTmetrix API to analyze a user's site speed and then do calculations for projected revenue when site speed is increased.`
      },
    ];

    this.state = {
      projects
    }
  }

  render() {
    const styles = {
      container: {
        width: `100%`
      },
      pink: {
        color: `rgb(223, 81, 121)`
      }
    }
    return (
      <div style={styles.container}>
        <Helmet>
          <title>Projects | Eric Stout - Front End Developer</title>
          <meta name="description" content="A collections of projects by Eric Stout" />
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                <span style={styles.pink}>{'//'}</span> Projects
              </h1>
              <p>A collection of really really cool projects I've had the pleasure to work on.</p>
              <div className="block-grid-4 md-block-grid-3 sm-block-grid-1">
                {this.state.projects.map( (project, i) => <ProjectItem key={`project${i}`} {...project} /> )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Projects;
