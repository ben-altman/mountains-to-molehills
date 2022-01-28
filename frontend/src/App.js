import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchProjects } from './actions/projectActions';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className='center-card'>
            <Route exact path="/" component={Home} />
          </div>
          {/* {console.log(this.props.projects)} */}
        </div>
      </Router>
    );
  }
}

export default App;
