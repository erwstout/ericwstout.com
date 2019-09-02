import React, { Component } from 'react';

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      artist: '',
      song: ''
    }
  }

  getLatestTrack() {
    fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=buschschwick&api_key=7f8e584dc35bdf163445f8847f21905c&format=json&limit=1')
    .then( response => response.json() )
    .then( data => {
      this.setState({
        artist: data.recenttracks.track[0].artist['#text'],
        song: data.recenttracks.track[0].name
      })
    })
    .catch( error => console.error(error) );
  }

  checkSong() {
    setInterval(() => {
      this.getLatestTrack();
    }, 25000);
  }

  componentDidMount() {
    this.getLatestTrack();
    this.checkSong();
  }

  componentWillUnmount() {
    clearInterval(this.checkSong())
  }

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
              <i className="fas fa-headphones"></i> What I'm listening to: <strong>{this.state.artist}</strong> - {this.state.song} <br />
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
