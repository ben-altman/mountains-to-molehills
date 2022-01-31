import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectShow from '../components/ProjectShow';
import { getProject, addGoal, addTask } from '../actions/projectActions';
import GoalsForm from '../components/GoalsForm';
import GoalsIndex from '../components/GoalsIndex';

class SelectedProjectContainer extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getProject(id);
    }

    render() {
        // debugger;
        console.log("spc props",this.props.selectedProject)
        return <div className='card'>
            <ProjectShow selectedProject={this.props.selectedProject} addTask={this.props.addTask}/>
            <GoalsIndex project={this.props.selectedProject} goals={this.props.goals} addTask={this.props.addTask} />
            <GoalsForm addGoal={this.props.addGoal} selectedProject={this.props.selectedProject}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        selectedProject: state.selectedProject,
        goals: state.selectedProject.goals
    }
}

const mapDispatchToProps = (dispatch) => {
    // debugger;

    return {
        getProject: id => dispatch(getProject(id)),
        addGoal: (description, projectId) => dispatch(addGoal(description, projectId)),
        addTask: (description, goalId) => dispatch(addTask(description, goalId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedProjectContainer);
