import { useParams } from "react-router-dom";
import projects from '../../data/projects.json'
import { Description, Title, Wrapper, Link } from "./ProjectInfo.styled";





export const ProjectInfo = () => {
  const {id} = useParams();
 const project = projects.find(item=>item.id===id)
     const { image, title, description, type, technologies, github, livePage } = project;
    console.log(project)
    return (
        <>
         {/* <img src={image} alt={title} /> */}
          <Wrapper>
          <Title>Title: <Description>{title}</Description></Title>
          <Title>Description: <Description>{description}</Description></Title>
          <Title>Project type: <Description>{type}</Description></Title>
          <Title>Stack: <Description>{technologies.join(', ')}</Description></Title>
          {github ? <Title><Link href={github} rel="noopener noreferrer nofollow" target='_blank' aria-label="link to Github" onClick={(e) => e.target.blur()}>Link to Github</Link></Title> : <Title>Link to Github: <Description>not available</Description></Title>}
          <Title><Link href={livePage} rel="noopener noreferrer nofollow" target='_blank' aria-label="link to Live page" onClick={(e) => e.target.blur()}>Link to live page</Link></Title>
          </Wrapper>
        </>
    )
    
    
}
