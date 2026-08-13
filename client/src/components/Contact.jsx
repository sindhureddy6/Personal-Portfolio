import "../css/contact.css";
import { useState } from "react";

import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaLinkedinIn,
    FaGithub,
    FaUser,
    FaPaperPlane
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";


export function Contact() {
    // Form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    // Message shown after submitting
    const [status, setStatus] = useState("");


    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    // Handle form submission
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                "http://localhost:5000/api/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (response.ok) {

                setStatus("Message sent successfully!");

                // Clear form
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });

            } else {

                setStatus(
                    data.message || "Something went wrong."
                );

            }

        } catch (error) {

            console.error(error);

            setStatus(
                "Unable to connect to the server."
            );
        }
    };
    return (
        <section className="contact-section" id="contact">

            <div className="contact-heading">
                <p className="contact-small-title">CONTACT ME</p>

                <h1>
                    Let's build something
                    <br />
                    together.
                </h1>

                <p className="contact-intro">
                    I'm open to internship opportunities, collaborations,
                    and interesting projects. Feel free to reach out
                    and let's connect.
                </p>
            </div>


            <div className="contact-container">

                {/* LEFT SIDE */}
                <div className="contact-info">

                    <h2>GET IN TOUCH</h2>

                    <div className="contact-detail">
                        <FaMapMarkerAlt className="contact-icon" />

                        <div>
                            <h3>LOCATION</h3>
                            <p>Telangana, India</p>
                        </div>
                    </div>


                    <div className="contact-detail">
                        <FaEnvelope className="contact-icon" />

                        <div>
                            <h3>EMAIL ME</h3>
                            <p>sindhureddy5226@gmail.com</p>
                        </div>
                    </div>


                    <div className="social-section">

                        <h3>SOCIALS</h3>

                        <div className="social-icons">

                            <a
                                href="https://linkedin.com/in/sindhu-reddy-85058b326"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>


                            <a
                                href="https://github.com/sindhureddy6"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>


                            <a
                                href="https://leetcode.com/u/sindhubojja0609/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LeetCode"
                            >
                                <SiLeetcode />
                            </a>

                        </div>

                    </div>

                </div>


                {/* RIGHT SIDE */}
                <div className="contact-form">

                    <h2>SEND A MESSAGE</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">

                            <label>FULL NAME</label>

                            <div className="input-wrapper">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                                <FaUser />

                            </div>

                        </div>


                        <div className="form-group">

                            <label>EMAIL ADDRESS</label>

                            <div className="input-wrapper">

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="sindhu2006@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                                <FaEnvelope />

                            </div>

                        </div>


                        <div className="form-group">

                            <label>SUBJECT</label>

                            <div className="input-wrapper">

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Your Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />

                                <FaUser />

                            </div>

                        </div>


                        <div className="form-group">

                            <label>YOUR MESSAGE</label>

                            <textarea
                                name="message"
                                placeholder="Write your message..."
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>

                        </div>


                        <button type="submit">

                            SEND MESSAGE

                            <FaPaperPlane />

                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}