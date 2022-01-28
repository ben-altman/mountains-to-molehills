import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchProjects } from './actions/projectActions';

class App extends React.Component {
  

  componentDidMount() {
    this.props.fetchProjects();
    console.log(this.props.projects);
  }

  render() {
    return (
      <div>
        <h1>Mountains to Molehills</h1>
        {console.log(this.props.projects)}
      </div>
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
