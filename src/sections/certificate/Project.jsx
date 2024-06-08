import Card from '../../components/Card'


const Project = ({project}) => {
  return (
    <Card className="certificate__project">
        <div className="certificate__project-image">
            <img src={project.image} alt="Certificate Project" />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="certificate__project-cta">
            <a href={project.github} className="btn sm primary" target="_blank" rel="noopner noreferrer">Verify</a>
        </div>
    </Card>
  )
}

export default Project