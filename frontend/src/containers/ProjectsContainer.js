import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectsIndex from '../components/ProjectsIndex';
import ProjectsForm from '../components/ProjectsForm';
import { fetchProjects, addProject, deleteProject } from '../actions/projectActions';

export class ProjectsContainer extends Component {

    componentDidMount() {
        this.props.fetchProjects();
        // console.log(this.props.projects);
    }

    render() {
        console.log(this.props)
        return <div className='card'>
            <ProjectsIndex projects={this.props.projects} deleteProject={this.props.deleteProject} />
            <ProjectsForm addProject={this.props.addProject} />
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
        // selectedProject: state.selectedProject,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => dispatch(fetchProjects()),
        addProject: (project) => dispatch(addProject(project)),
        deleteProject: (id) => dispatch(deleteProject(id)),
        // getProject: (id) => dispatch(getProject(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
