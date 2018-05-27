import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../Assets/img/logo.svg';

class Header extends Component {

  render() {
    const styles = {
      header: {
        padding: `25px 0`
      }
    }
    return (
      <header className="container" style={styles.header}>
        <div className="row row--align-items-center">
          <div className="col-3">
            <Link to="/">
              <img src={logo} alt="Eric Stout" />
            </Link>
          </div>
          <div className="col-9 text-right">
            <nav>
              <ul>
                <li>
                  <NavLink to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <a href="https://medium.com/@erwstout">
                    Writing
                  </a>
                </li>
                <li>
                  <NavLink to="/experience">
                    Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }

}

export default Header;
