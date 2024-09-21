

import {
    AxiosIcon, BootstrapIcon, CssIcon, EmotionIcon, ExpressIcon, FigmaIcon, GitHubIcon, GitIcon, HtmlIcon,
    JsIcon, List, MongoDBIcon, MongooseIcon, NodeIcon, PostgreSQLIcon, PostmanIcon, PrismaIcon, ReactIcon, ReduxIcon, RestApiIcon, ScssIcon, SectionTitle,
    SkillSection, StyledIcon, TailwindIcon, TsIcon, WebPackIcon
} from "./TechSkills.styled"


export const TechSkills = () => {
  return (
    <SkillSection>
          <SectionTitle>TECHNICAL SKILLS</SectionTitle>
        <List>
          <h2>Frontend:</h2>
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
              <li><EmotionIcon /></li>
          <li><TailwindIcon/></li>
          <li><StyledIcon/></li>
              <li><ReduxIcon /></li>
              <li><GitIcon /></li>
              <li><GitHubIcon/></li>
          </List>
          <List>
          <h2>Backend:</h2>
              <li><NodeIcon /></li>
              <li><MongoDBIcon /></li>
              <li><ExpressIcon /></li>
              <li><MongooseIcon /></li>
              <li><PostmanIcon /></li>
              <li><PrismaIcon /></li>
              <li><PostgreSQLIcon /></li>





          </List>
    </SkillSection>
  )
}

