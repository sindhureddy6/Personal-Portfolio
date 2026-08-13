import "../css/about.css";
export function About(){
    return(
        <section id="about" className="about-section">
            <div className="about-title"><h1>ABOUT ME</h1></div>
            <div className="about-intro">
                <p className="about-description">
                    I'm Sindhu,a tech enthusiast and Computer Science Engineer undergraduate passionate
                    about building responsive full stack applications while continuosly improving 
                    problem-solving using Data structures Algorithms.
                    <br></br>
                    Proficient in frontend,backend technologies,java 
                    and MySQL.Strong understanding of OOP,DBMS,Operating Systems and Computer Networks.
                </p>
            </div>
            <div className="about-credits">
                <div className="credit-card">
                    <h2>9.3</h2>
                    <p>CGPA</p>
                </div>
                <div className="credit-card">
                    <h2>200+</h2>
                    <p>LEETCODE <br />PROBLEMS</p>
                </div>
                <div className="credit-card">
                    <h2>2+</h2>
                    <p>HACKATHON <br />EXPERIENCES</p>
                </div>
            </div>
        </section>
    );
}