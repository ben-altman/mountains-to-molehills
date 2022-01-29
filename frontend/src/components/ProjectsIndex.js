import { Link } from 'react-router-dom';

const ProjectsIndex = (props) => {
    
    return <div>
        <h2>Current Projects:</h2>
        {props.projects.map(project => (
            <div key={project.id}>
                <Link to={`/projects/${project.id}`}>
                    <h3>{project.title}</h3>
                    <button>Delete this Project</button>
                </Link>
            </div>
            
        ))}
    </div>
}



export default ProjectsIndex;