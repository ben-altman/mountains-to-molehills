import React from 'react';
import './App.css';
import Home from './components/Home.js';
import ProjectsContainer from './containers/ProjectsContainer';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className='center-card'>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={ProjectsContainer} />
          </div>
          {console.log(this.props.projects)}
        </div>
      </Router>
    );
  }
}

export default App;
