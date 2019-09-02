import React, { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");

  useEffect(() => {
    const getLatestTrack = () => {
      return fetch(
        "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=buschschwick&api_key=7f8e584dc35bdf163445f8847f21905c&format=json&limit=1"
      )
        .then(response => response.json())
        .then(data => {
          setArtist(data.recenttracks.track[0].artist["#text"]);
          setSong(data.recenttracks.track[0].name);
        })
        .catch(error => console.error(error));
    };

    const checkSong = () => {
      setInterval(() => {
        return getLatestTrack();
      }, 25000);
    };
  }, []);

  return (
    <footer className="container" style={styles.container}>
      <div className="row">
        <div className="col-12">
          <hr />
          <p style={styles.text}>
            <i className="fas fa-headphones"></i> What I'm listening to:{" "}
            <strong>{artist}</strong> - {song} <br />
            &copy; {new Date().getFullYear()} Eric Stout | This site was built
            using React, React Router, and hosted with Google Firebase. &nbsp;
            <a
              href="https://github.com/erwstout/ericwstout.com"
              title="View ericwstout.com on GitHub"
            >
              View the source code GitHub.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  container: {
    padding: `60px 0 30px`
  },
  text: {
    fontSize: `14px`,
    color: `rgb(185, 185, 185)`
  }
};

export default Footer;
