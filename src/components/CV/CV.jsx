import Resume from '../../assets/Resume_Nedilko_Mykola.pdf';
import { CvButton } from './CV.styled';



export const CV = () => {
  return (
    <div>
      <CvButton
      href={Resume}
      download="CV_Resume_Nedilko_Mykola.pdf"
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

