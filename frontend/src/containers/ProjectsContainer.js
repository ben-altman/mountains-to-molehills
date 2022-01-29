import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectsIndex from '../components/ProjectsIndex';
import ProjectsForm from '../components/ProjectsForm';
import { fetchProjects, addProject } from '../actions/projectActions';

export class ProjectsContainer extends Component {

    componentDidMount() {
        this.props.fetchProjects();
        // console.log(this.props.projects);
    }

    render() {
        // debugger;
        return <div className='card'>
            <ProjectsIndex projects={this.props.projects}/>
            <ProjectsForm addProject={this.props.addProject} />
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => dispatch(fetchProjects()),
        addProject: (project) => dispatch(addProject(project)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
