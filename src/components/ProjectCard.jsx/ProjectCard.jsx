import { Link } from "react-router-dom";
import { Description, Img, Title, Wrapper } from "./ProjectCard.styled";



export const ProjectCard = ({ project }) => {
    const { id, image, title,  type} = project;

    return (
        <Link to={`/project/${id}`}>
          <Img src={image} alt={title} />
          <Wrapper>
          <Title>Title: <Description>{title}</Description></Title>
          <Title>Project type: <Description>{type}</Description></Title>
          </Wrapper>
        </Link>
    )
}