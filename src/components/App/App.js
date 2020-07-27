import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//--- CSS ---
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import HorizontalLinearStepper from '../Stepper/Stepper';
import { Container } from '@material-ui/core';

//--- Components ---

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <br />
        <Container maxWidth="md">
          <Router>
            <Route exact path="/1" component={Feeling} />
            <Route exact path="/2" component={Understanding} />
            <Route exact path="/3" component={Support} />
            <Route exact path="/4" component={Comments} />
            <Route exact path="/review" component={Review} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/" component={HorizontalLinearStepper} />
          </Router>
        </Container>
      </div>
    );
  }
}

export default connect()(App);
