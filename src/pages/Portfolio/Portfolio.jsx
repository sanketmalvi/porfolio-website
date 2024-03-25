import  { useState, useEffect } from 'react';
import { FaRegEye } from 'react-icons/fa';
import IMG1 from "../../assets/image1.png";
import IMG2 from "../../assets/image2.png";
import IMG3 from "../../assets/image3.png";  

const Portfolio = () => {
  // State to store project data and filtered projects
  const [projects, setProjects] = useState([]);


  // Load project data from projects.json
  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      })
      .catch(error => console.error('Error loading project data:', error));
  }, []);


  const soloProjects = [
    {
      id: 1,
      title: "Summary Generator",
      img: IMG1,
      description:
        "Summarize any website, any article, using AI, all you need is to paste the URL and Let the AI do the rest!",
      technologies: "Html | CSS | React Js | Bootstrap | Vercel",
      link: "https://ai-based-summary-generator.vercel.app/",
      github: "https://github.com/sanketmalvi/AI-Based-Summary-Generator",
    },
    {
      id: 2,
      title: "Stick-Hero-JS",
      img: IMG3,
      description:
        "Stick Hero Game.",
      technologies: "HTML | CSS | JS | Bootstrap",
      link: "https://stick-hero-js.netlify.app/",
      github: "https://github.com/sanketmalvi/Stick-Hero-JS",
    },
    {
      id: 3,
      title: "HotStar Clone",
      img: IMG2,
      description: "This site is a Sign-in/Sign-up page.",
      technologies: "HTML | CSS | Bootstrap",
      link: "https://hotstar-clone-hazel.vercel.app/",
      github: "https://github.com/sanketmalvi/HotstarClone"
    }
  ];




  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {soloProjects.map((pro) => (
            <li
              className="project-item active"
              key={pro.id}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  </div>
                  <img src={pro.img} alt="" loading="lazy" />
                </figure>
                <h3 className="h3 project-title">{pro.title}</h3>
                <p className='dec'>{pro.description}</p>

                <div className='links'>
                <a className="btn" href={pro.link} alt="link">
                  Link
                </a>
                <a className="btn" href={pro.github} alt="link">
                  Repository
                </a>
                </div>
                
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;