import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchProjects } from './actions/projectActions';
import Home from './components/Home.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  

  componentDidMount() {
    this.props.fetchProjects();
    // console.log(this.props.projects);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          {/* {console.log(this.props.projects)} */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    // loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
