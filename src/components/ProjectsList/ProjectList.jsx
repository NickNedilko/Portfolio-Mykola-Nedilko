import projects from '../../data/projects.json'
import { ProjectCard } from '../ProjectCard.jsx/ProjectCard'
import { Item, List } from './ProjectList.styled'


export const ProjectList = () => {
    
    return (
        <List>
            {projects.map(project => <Item key={project.id}>
               <ProjectCard project={project}/>
            </Item>)}    
        </List>
)

}