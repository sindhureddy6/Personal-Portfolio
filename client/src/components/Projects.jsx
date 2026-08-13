/*import "../css/projects.css";
export function Projects(){
    return(
        <section className="projects-section">
            <div className="projects-title"><h1>PROJECTS</h1></div>

            <div className="project-card">
                <div className="project-number">01</div>
                <div className="project-content">
                    <h2>Full Stack Personal Portfolio Website</h2>
                    <p className="project-tech">React.js Node.js Express.js MySQL</p>
                    <p className="project-description">A responsivefull-stack personal portfolio website designed to showcase my technical 
                     skills,projects,achievements,and development journey,with project data integrated through a backend API and database.
                    </p>
                    <div className="project-links">
                        <a href="#" target="_blank" rel="noreferrer">GITHUB</a>
                        <a href="#" target="_blank" rel="noreferrer">LIVE DEMO</a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <div className="project-number">02</div>
                <div className="project-content">
                    <h2>Locura-Travel Safety App</h2>
                    <p className="project-tech">HTML CSS JAVASCRIPT</p>
                    <p className="project-description">A travel safety application designed to help people quickly seek assistance when they 
                        are in an unfamiliar or dangerous location.Users can request help from nearby people and access emergency assistance
                        from police and hospitals.
                    </p>
                    <div className="project-links">
                        <a href="#" target="_blank" rel="noreferrer">GITHUB</a>
                        <a href="#" target="_blank" rel="noreferrer">LIVE DEMO</a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <div className="project-number">03</div>
                <div className="project-content">
                    <h2>Frontend fundamentals</h2>
                    <p className="project-tech">HTML CSS JAVASCRIPT</p>
                    <p className="project-description">Done some basic frontend projects like amazon clone,todo list,chatbot,weather app,
                        expense tracker,weather app,analog clock,rock paper scissors to strengthen my fundamentals in frontend technologies.
                    </p>
                    <div className="project-links">
                        <a href="https://github.com/sindhureddy6/Sindhu-Reddy/tree/main" target="_blank" rel="noreferrer">GITHUB</a>
                        <a href="#" target="_blank" rel="noreferrer">LIVE DEMO</a>
                    </div>
                </div>
            </div>
        </section>
    );
}*/

import { useEffect, useState } from "react";
import "../css/projects.css";

export function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch(" https://personal-portfolio-wx8d.onrender.com")/* http://localhost:5000/api/projects*/
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
            })
            .catch((error) => {
                console.log("Error fetching projects:", error);
            });

    }, []);

    return (
        <section className="projects-section">

            <div className="projects-title">
                <h1>PROJECTS</h1>
            </div>

            {projects.map((project, index) => (

                <div className="project-card" key={project.id}>

                    <div className="project-number">
                        {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="project-content">

                        <h2>{project.title}</h2>

                        <p className="project-tech">
                            {project.technologies}
                        </p>

                        <p className="project-description">
                            {project.description}
                        </p>

                        <div className="project-links">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                GITHUB
                            </a>

                        </div>

                    </div>

                </div>

            ))}

        </section>
    );
}