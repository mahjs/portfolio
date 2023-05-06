import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/rawg.jpeg";

export type WebSiteData = {
  id: number;
  src: string;
  description: string;
  url: string;
  githubRepoUrl: string;
};

export const webSitesData: WebSiteData[] = [
  {
    id: 1,
    src: IMG1,
    description: "A simple and responsive app",
    url: "https://mahjs.github.io/foods",
    githubRepoUrl: "https://github.com/mahjs/foods",
  },
  {
    id: 6,
    src: IMG6,
    description: "Simple rawg.io's website clone",
    url: "https://fastidious-tiramisu-b3bebd.netlify.app/",
    githubRepoUrl: "https://github.com/mahjs/gamehub",
  },
  {
    id: 3,
    src: IMG3,
    description: "Beautiful, simple and 3D like app",
    url: "https://mahjs.github.io/theroad",
    githubRepoUrl: "https://github.com/mahjs/theroad",
  },
  {
    id: 4,
    src: IMG4,
    description: "An art and architect website with loading",
    url: "https://mahjs.github.io/architect-site",
    githubRepoUrl: "https://github.com/mahjs/architect-site",
  },
  {
    id: 5,
    src: IMG5,
    description: "Maybe some creative design",
    url: "https://mahjs.github.io/creative-design",
    githubRepoUrl: "https://github.com/mahjs/creative-design",
  },
  {
    id: 2,
    src: IMG2,
    description: "A paypal clone with some page navigation",
    url: "https://incredible-taffy-1a4966.netlify.app",
    githubRepoUrl: "https://github.com/mahjs/paypal",
  },
];
