import React from 'react'
import hangman from '../../images/hangman.gif'
import charmander from '../../images/charmander.png'
import portfolio from '../../images/portfolio.png'
import hackathon from '../../images/hackathon.png'


const DisplayProjects: React.FC = () => {
  const projects: Array<Project> = [
    {image: hangman, link:`https://github.com/Ash-Eileen/terminal-app`, codeIcon: ``, name: `Hangman Terminal App`, platformIcon: ``, description: ``},
    {image: charmander, link:``, codeIcon: ``, name: ``, platformIcon: ``, description: ``},
    {image: portfolio, link: ``, codeIcon: ``, name: ``, platformIcon: ``, description: ``},
    {image: hackathon, link: ``, codeIcon: ``, name: `API Hackathon`, platformIcon: ``, description: ``},
    {image: '', link: ``, codeIcon: ``, name: `Marketplace`, platformIcon: ``, description: ``},
    {image: '', link: ``, codeIcon: ``, name: `Express Hackathon`, platformIcon: ``, description: ``},
  ]
 return (
    <>
      {projects.map((project, i) => {
        return (
          <section key={i}>
          <img src={project.image} alt={project.name}/>
          <h3>
            <a href={project.link}>
              <i className={project.codeIcon}></i>
              {project.name}
              <i className={project.platformIcon}></i>
            </a>
          </h3>
          <p>{project.description}</p>
          </section>
        );
      })} 
    </>
  )
}

export default DisplayProjects
