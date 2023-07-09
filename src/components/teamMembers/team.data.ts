import { _MAN } from "../../assets/jpeg";
import { ImageType, _TWITTER } from "../../assets/svgs";
import { _BINAZ, _CYRUS, _ONYINYE } from "../../assets/webp";

export interface TeamShape {
  image: ImageType;
  name: string;
  role: string;
  twitter: string;
  linkedin: string;
  key?: string | number;
}

const data:TeamShape[] = [
  {
    image: _CYRUS,
    name: 'Cyrus Agbo',
    role: 'Founder',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    image: _ONYINYE,
    name: 'Onyinye Okoye',
    role: 'Co-founder',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    image: _BINAZ,
    name: 'Jones Gabriel',
    role: 'CTO',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },

]

export default data;