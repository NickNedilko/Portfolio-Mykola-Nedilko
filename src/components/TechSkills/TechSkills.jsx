

import {
    AxiosIcon, BootstrapIcon, CssIcon, EmotionIcon, FigmaIcon, GitHubIcon, GitIcon, HtmlIcon,
    JsIcon, List, MongoDBIcon, NodeIcon, ReactIcon, ReduxIcon, RestApiIcon, ScssIcon, SectionTitle,
    SkillSection, StyledIcon, TsIcon, WebPackIcon
} from "./TechSkills.styled"


export const TechSkills = () => {
  return (
    <SkillSection>
        <SectionTitle>TECHNICAL SKILLS</SectionTitle>
        <List>
        <li><HtmlIcon/></li>
              <li><CssIcon /></li>
               <li><FigmaIcon/></li>
          <li><ScssIcon/></li>
              <li><JsIcon /></li>
          <li><TsIcon/></li>
              <li><WebPackIcon/></li>
          <li><BootstrapIcon/></li>
              <li><AxiosIcon /></li>
               <li><RestApiIcon/></li>
          <li><ReactIcon/></li>
          <li><EmotionIcon/></li>
          <li><StyledIcon/></li>
              <li><ReduxIcon /></li>
              <li><GitIcon /></li>
              <li><GitHubIcon/></li>
              <li><NodeIcon /></li>
              <li><MongoDBIcon /></li>
        </List>
    </SkillSection>
  )
}

