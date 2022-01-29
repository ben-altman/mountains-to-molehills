import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ProjectsIndex from '../components/ProjectsIndex';
import { fetchProjects } from '../actions/projectActions';

export class ProjectsContainer extends Component {

    componentDidMount() {
        this.props.fetchProjects();
        // console.log(this.props.projects);
    }

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
