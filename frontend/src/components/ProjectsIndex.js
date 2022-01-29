const ProjectsIndex = (props) => {
    return <div>
        <h2>Current Projects:</h2>
        {/* {console.log(props)} */}
        {props.projects.map(project => (
            <div key={project.id}>
                <h3>{project.title}</h3>
                <button>Delete this Project</button>
            </div>
        ))}
    </div>
}

export default ProjectsIndex;