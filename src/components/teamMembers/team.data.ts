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
    twitter: 'https://twitter.com/CyrusAgbo',
    linkedin: 'https://www.linkedin.com/in/cyrusagbo/',
  },
  {
    image: _ONYINYE,
    name: 'Onyinye Okoye',
    role: 'Co-founder',
    twitter: 'https://twitter.com/OnyiieeO',
    linkedin: 'https://ae.linkedin.com/in/onyinyeokoye',
  },
  {
    image: _BINAZ,
    name: 'Jones Gabriel',
    role: 'CTO',
    twitter: 'https://twitter.com/jbg4k',
    linkedin: 'https://www.linkedin.com/in/jones-gabriel-507b9b101/',
  },

]

export default data;