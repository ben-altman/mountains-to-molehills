import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectShow from '../components/ProjectShow';
import { getProject } from '../actions/projectActions';

export class ProjectsContainer extends Component {

    componentDidMount() {
        this.props.getProject();
        // console.log(this.props.projects);
    }

    render() {
        return <div className='card'>
            <ProjectShow project={this.props.selectedProject} />
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.selectedProject,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProject: id => dispatch(getProject(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
