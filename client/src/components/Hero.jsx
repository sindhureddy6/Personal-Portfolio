import "../css/hero.css";
export function Hero(){
    return(
        <section className="hero">
                <div className="hero-title"><h1>SINDHU</h1></div>
                <div className="hero-intro">
                    <p className="hero-role">FULL STACK DEVELOPER</p>
            
                    <p className="hero-description">
                        Computer Science and Data Science student passionate about building scalable 
                        web applications and solving problems using Data Structures and Algorithms.
                    </p>
                </div>

                <div className="social-links">
                    <a href="https://github.com/sindhureddy6" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/sindhu-reddy-85058b326" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://leetcode.com/u/sindhubojja0609/" target="_blank" rel="noreferrer">Leetcode</a>
                </div>
        </section>
    );
}