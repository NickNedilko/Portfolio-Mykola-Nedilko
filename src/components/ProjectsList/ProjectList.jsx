import projects from '../../data/projects.json'
import { ProjectCard } from '../ProjectCard.jsx/ProjectCard'
import { Item, List, PageTitle } from './ProjectList.styled'


export const ProjectList = () => {
    
    return (
        <>
        <PageTitle>Projects</PageTitle>
        <List>
            {projects.map(project => <Item key={project.id}>
               <ProjectCard project={project}/>
            </Item>)}    
        </List>
        </>
)

}