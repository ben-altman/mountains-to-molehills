import { Link } from 'react-router-dom';

const ProjectsIndex = (props) => {

    return <div>
        <h2>Current Projects:</h2>
        {props.projects.map(project => (
            <div key={project.id}>
                <Link to={`/projects/${project.id}`} >
                    <h3 onClick={(() => {props.getProject(project.id)})}>{project.title}</h3>
                </Link>
                <button onClick={(() => {props.deleteProject(project.id)})}>Delete this Project</button>
            </div>
            
        ))}
    </div>
}



export default ProjectsIndex;