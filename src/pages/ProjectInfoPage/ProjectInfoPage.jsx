import { useParams } from "react-router-dom";
import { ProjectInfo } from "../../components/ProjectInfo/ProjectInfo"
import { ImageSwiper } from "../../components/Swiper/Swiper";
import projects from '../../data/projects.json'



const ProjectInfoPage = () => {
    const { id } = useParams();
   const project = projects.find(project=>project.id ===id)
   

    return (
        <>
            {/* <img src={`.${project.image}`} alt="zsadfghj" /> */}
            <ImageSwiper project={project} />
        <ProjectInfo/>
        </>
    )
}

export default ProjectInfoPage;