import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectShow from '../components/ProjectShow';
import { getProject } from '../actions/projectActions';

export class ProjectsContainer extends Component {

    componentDidMount() {
        console.log(this.props.match.params)
        const id = this.props.match.params.id
        this.props.getProject(id);
        // console.log(this.props.projects);
    }

    // displayLoading = () => {
    //     console.log('here')
    //     return !this.props.selectedProject ? <p>loading</p> : 
    //         <div className='card'>
    //         <ProjectShow project={this.props.selectedProject} />
    //         </div> 
        
    // }

    render() {
        console.log('here')
                return <div className='card'>
            <ProjectShow project={this.props.selectedProject} />
        </div> 
    }
}

const mapStateToProps = (state) => {
    return {
        selectedProject: state.selectedProject,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProject: id => dispatch(getProject(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
