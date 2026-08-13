# 🌐 Personal Portfolio Website

A modern, responsive, full-stack personal portfolio website designed to showcase my skills, projects, experience, achievements, and contact information.

The portfolio is built with a React frontend, Node.js/Express backend, and MySQL database. The application is fully deployed using Vercel, Render, and Aiven.

## 🚀 Live Demo

🔗 https://personal-portfolio-liard-alpha-66.vercel.app/

## 📂 Source Code

🔗 https://github.com/sindhureddy6/Personal-Portfolio

---

## ✨ Features

### 🏠 Home / Hero Section
- Personal introduction
- Professional summary
- Navigation to different sections
- Social profile links

### 👩‍💻 About Section
- Personal and academic information
- CGPA
- LeetCode problem-solving progress
- Hackathon and technical experience

### 🛠️ Skills Section
Displays technical skills including:

- HTML
- CSS
- JavaScript
- React.js
- Node.js
- Express.js
- MySQL
- Git & GitHub
- REST APIs

### 📂 Projects Section
- Dynamically fetches project information from the backend
- Project details are stored in MySQL
- Displays project descriptions and technologies
- GitHub/source-code links
- Live demo links where available

### 💼 Experience Section
- Internship experience
- Technical experience
- Relevant activities and achievements

### 📩 Contact Section
- Contact form for visitors
- Form data is sent to the backend
- Messages are stored in the MySQL database
- Success/error feedback is displayed to the user

### 📱 Responsive Design
- Mobile-friendly interface
- Tablet support
- Desktop support
- Responsive project and skill cards
- Responsive navigation and contact form

---

## 🏗️ Project Architecture

```text
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │       Vercel        │
                    └──────────┬──────────┘
                               │
                               │ REST API
                               ▼
                    ┌─────────────────────┐
                    │ Node.js + Express   │
                    │       Render        │
                    └──────────┬──────────┘
                               │
                               │ MySQL
                               ▼
                    ┌─────────────────────┐
                    │    MySQL Database   │
                    │       Aiven         │
                    └─────────────────────┘
