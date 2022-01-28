import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ProjectsContainer extends Component {
  render() {
    return <div></div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
