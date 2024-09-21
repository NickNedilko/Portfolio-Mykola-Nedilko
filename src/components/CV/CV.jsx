import Resume from '../../assets/CV_Mykola_Nedilko.pdf';
import { CvButton } from './CV.styled';



export const CV = () => {
  return (
    <div>
      <CvButton
      href={Resume}
      download="CV_Mykola_Nedilko.pdf"
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.target.blur()}
      aria-label="CV"
      >
      Download CV
      </CvButton>
    </div>
  )
}

