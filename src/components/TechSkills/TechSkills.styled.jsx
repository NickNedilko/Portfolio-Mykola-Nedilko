import styled from 'styled-components';

import { ReactComponent as Html} from '../../assets/icons/html.svg';
import { ReactComponent as Css} from '../../assets/icons/css.svg';
import { ReactComponent as Js } from '../../assets/icons/js.svg';
import { ReactComponent as RestApi } from '../../assets/icons/rest-api-icon.svg';
import { ReactComponent as Ts} from '../../assets/icons/ts.svg';
import { ReactComponent as React} from '../../assets/icons/react.svg';
import { ReactComponent as Redux} from '../../assets/icons/redux.svg';
import { ReactComponent as Scss} from '../../assets/icons/scss.svg';
import { ReactComponent as Emotion} from '../../assets/icons/emotion.svg';
import { ReactComponent as Styled} from '../../assets/icons/styled-components.svg';
import { ReactComponent as Bootstrap } from '../../assets/icons/bootstrap.svg';
import { ReactComponent as Git } from '../../assets/icons/git.svg';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as Webpack } from '../../assets/icons/webpack.svg';
import { ReactComponent as Node } from '../../assets/icons/node.svg';
import { ReactComponent as MongoDB } from '../../assets/icons/mongoDB.svg';
import { ReactComponent as Figma } from '../../assets/icons/figma.svg';
import { ReactComponent as Axios } from '../../assets/icons/axios.svg';
import { ReactComponent as Express } from '../../assets/icons/express.svg';
import { ReactComponent as Mongoose } from '../../assets/icons/mongoose.svg';
import { ReactComponent as Postman } from '../../assets/icons/postman.svg';
import { ReactComponent as Prisma } from '../../assets/icons/prisma.svg';
import { ReactComponent as PostgreSQl } from '../../assets/icons/postgresql.svg';
import { ReactComponent as Tailwind } from '../../assets/icons/tailwind.svg';











export const SkillSection = styled.section`
    margin: 40px 0;
    padding: 45px 15px;
    background-color: lightblue;
    border-radius: 15px;
` 

export const SectionTitle = styled.h2`
  font-size: 30px;
    margin-bottom: 25px;
    background: var(--title-color);
     -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
`

export const List = styled.ul`
    display: flex;
    margin-top: 40px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
    

    @media screen and (min-width: 768px) {
        gap: 30px;
    }

    @media screen and (min-width: 1280px) {
       
            justify-content: center;

        
    }
`;


export const HtmlIcon = styled(Html)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }`


export const RestApiIcon = styled(RestApi)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }`

export const CssIcon = styled(Css)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const PostmanIcon = styled(Postman)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;


export const MongooseIcon = styled(Mongoose)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;


export const GitIcon = styled(Git)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;
export const GitHubIcon = styled(GitHub)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const NodeIcon = styled(Node)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const WebPackIcon = styled(Webpack)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const JsIcon = styled(Js)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const TsIcon = styled(Ts)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const MongoDBIcon = styled(MongoDB)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;
export const ExpressIcon = styled(Express)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const ReactIcon = styled(React)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const ReduxIcon = styled(Redux)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const ScssIcon = styled(Scss)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const EmotionIcon = styled(Emotion)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const StyledIcon = styled(Styled)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const BootstrapIcon = styled(Bootstrap)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const FigmaIcon = styled(Figma)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const AxiosIcon = styled(Axios)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const PrismaIcon = styled(Prisma)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const PostgreSQLIcon = styled(PostgreSQl)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;

export const TailwindIcon = styled(Tailwind)`
    width: 50px;
    height: 50px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (min-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;