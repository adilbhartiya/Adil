import './certificate.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import { useState } from 'react'

const Certificate = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];
  
  const filterProjectsHandler = (category) => {
    if(category === "all") {
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }
  

  return (
    <section id="certificate">
      <h2>Certificate</h2>
      <p>
      Explore my credentials in data science, machine learning, and programming through completed courses and certifications.
      </p>
      <div className="container certificate__container">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Certificate