import "../css/skills.css";
export function Skills(){
    return(
        <section className="skills-section">
            <div className="skills-title"><h1>Tech Stack</h1></div>
            <div className="skills-category">
                <h2>PROGRAMMING</h2>
                <div className="skill-grid">
                    <div className="skill-card">Java</div>
                    <div className="skill-card">JavaScript</div>
                </div>
            </div>

            <div className="skills-category">
                <h2>FRONTEND</h2>
                <div className="skill-grid">
                    <div className="skill-card">HTML</div>
                    <div className="skill-card">CSS</div>
                    <div className="skill-card">JavaScript</div>
                    <div className="skill-card">React.js</div>
                </div>
            </div>

            <div className="skills-category">
                <h2>BACKEND</h2>
                <div className="skill-grid">
                    <div className="skill-card">Node.js</div>
                    <div className="skill-card">Express.js</div>
                    <div className="skill-card">REST APIs</div>
                </div>
            </div>

            <div className="skills-category">
                <h2>DATABASE</h2>
                <div className="skill-grid">
                    <div className="skill-card">MySQL</div>
                </div>
            </div>

            <div className="skills-category">
                <h2>CS FUNDAMENTALS</h2>
                <div className="skill-grid">
                    <div className="skill-card">DSA</div>
                    <div className="skill-card">OOP</div>
                    <div className="skill-card">DBMS</div>
                    <div className="skill-card">Operating Systems</div>
                    <div className="skill-card">Computer Networks</div>
                </div>
            </div>
        </section>
    );
}