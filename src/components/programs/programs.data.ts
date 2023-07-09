import { _GEN_AI, _SPARK_SESSION, _TWITTER_SPACES } from "../../assets/png";
import { ImageType } from "../../assets/svgs";


interface ProgramShape {
  icon: ImageType;
  title: string;
  content: string;
}

const data:ProgramShape[] = [
  {
    icon: _TWITTER_SPACES,
    title: 'Twitter Spaces',
    content: 'Virtual knowledge sharing sessions on Twitter that feature an industry expert per session. Audiences get to engage in free Q & A.'
  },

  {
    icon: _SPARK_SESSION,
    title: 'Spark Sessions',
    content: 'Software testing and practice sessions executed in partnership with public and private universities facilitated by an industry expert.'
  },

  {
    icon: _GEN_AI,
    title: 'Gen Ai Conference',
    content: 'Pan-African conference on Generative Ai. It features advanced learning sessions for brand executives & industry practitioners. This is a paid event.'
  },
]


export default data;