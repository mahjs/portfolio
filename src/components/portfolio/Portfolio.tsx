import "./Portfolio.css";
import { webSitesData, type WebSiteData } from "./imagesData";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {webSitesData.map((site: WebSiteData) => (
          <article className="portfolio__item" key={site.id}>
            <div className="portfolio__item-image">
              <img src={site.src} alt="a portfolio" />
            </div>
            <h3>{site.description}</h3>
            <div className="portfolio__item-cta">
              <a
                href={site.githubRepoUrl}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={site.url}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
