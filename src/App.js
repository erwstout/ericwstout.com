import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop';

import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Social from './Components/Social';
import Footer from './Components/Footer';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Alert from './Components/Alert';
import NotFound from './Components/NotFound';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showAlert: false
    }

    this.closeAlert = this.closeAlert.bind(this);
  }

  // show github alert
  showAlert() {
    setTimeout(() => {
      this.setState({
        showAlert: true
      });
    }, 8000);
  }

  closeAlert() {
    this.setState({
      showAlert: false
    });
  }

  componentDidMount() {
    this.showAlert();
  }

  render() {
    return (
      <Router>
        <Route render={ ({location}) => (
          <div className="site-container">
            <Header />
            <Social />
            <div style={{position: `relative`}}>
              <ScrollToTop>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/experience" component={Experience} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={NotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              </ScrollToTop>
            </div>
            <Alert show={this.state.showAlert} closeAlert={this.closeAlert} />
            <Footer />
          </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
