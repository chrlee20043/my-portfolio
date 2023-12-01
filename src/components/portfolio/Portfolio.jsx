import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/aMUSE-img.png";
import IMG2 from "../../assets/dancelibrary.png";
import IMG3 from "../../assets/Christinas-List.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "aMUSE",
    github: "https://github.com/ghp-team-2-capstone/museum-app",
    liveLink: "https://amuse-jx0a.onrender.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Dance Library",
    github: "https://github.com/chrlee20043/dance-library",
    liveLink: "https://dance-library.onrender.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Christina's List",
    github: "https://github.com/chrlee20043/christinas-list",
    liveLink: "https://christinas-list.onrender.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, liveLink }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={liveLink}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
