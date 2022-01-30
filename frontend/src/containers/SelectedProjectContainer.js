import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectShow from '../components/ProjectShow';
import { getProject } from '../actions/projectActions';

class SelectedProjectContainer extends Component {

    componentDidMount() {
        debugger;
        console.log("mounting:", this.props.match.params)
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
        // debugger;
        console.log(this.props.selectedProject)
        return <div className='card'>
            {/* <ProjectShow selectedProject=/> */}
            <ProjectShow getProject={this.props.selectedProject} />
        </div>
        // if( this.props.selectedProject === true) {return <div className='card'>
        //     <ProjectShow project={this.props.selectedProject} />
        // </div> } else { <h1>Loading</h1>}
    }
}

const mapStateToProps = (state) => {
    return {
        selectedProject: state.selectedProject,
    }
}

const mapDispatchToProps = (dispatch) => {
    // debugger;

    return {
        getProject: id => dispatch(getProject(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedProjectContainer);
