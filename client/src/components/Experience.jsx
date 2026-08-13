import "../css/experience.css";

export function Experience() {
    return (
        <section className="experience-section">

            <h1 className="experience-title">Experience</h1>

            <div className="experience-item">

                <div className="experience-number">01</div>

                <div className="experience-content">

                    <p className="experience-date">
                        HACKATHONS & COMPETITIONS
                    </p>

                    <h2>TECHNICAL EVENTS</h2>

                    <div className="achievement-list">

                        <div className="achievement">
                            <h3>Smart India Hackathon</h3>
                            <p>
                                Selected at the internal level while working on
                                a problem-solving based technical solution for
                                Locura - a travel safety app.
                            </p>
                        </div>

                        <div className="achievement">
                            <h3>A 24 Hour Hackathon</h3>
                            <p>
                                Participated in a 24 hour hackathon conducted
                                at our college and worked on developing a
                                technology-based solution.
                            </p>
                        </div>

                        <div className="achievement">
                            <h3>Code Debugging Competition</h3>
                            <p>
                                Achieved a Top 2 position in a competitive
                                coding and debugging event.
                            </p>
                        </div>

                    </div>

                </div>

            </div>


            <div className="experience-item">

                <div className="experience-number">02</div>

                <div className="experience-content">

                    <p className="experience-date">
                        LEADERSHIP & ACTIVITIES
                    </p>

                    <h2>GNI MUN</h2>

                    <h3>ORGANISING COMMITTEE MEMBER</h3>

                    <p className="experience-description">
                        Contributed to organising and coordinating
                        college-level events, collaborating with team members
                        and helping ensure smooth execution of activities.
                    </p>

                </div>

            </div>

        </section>
    );
}