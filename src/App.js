import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import "./App.css";

const App = () => {

  const [resumeData, setResumeData] = useState(
      {
          "main": {
              "name": "Benjamin Nikšić",
              "occupation": "IT Student",
              "description": "Talk is cheap, show me the code",
              "image": "profilepic.jpg",
              "bio": "Hi everyone! I'm high-energy student currently finalizing Bachelor science diploma in Computer Science and Informatics and prepared to contribute abilities to Software Engineer role while further developing acquired skills and gaining real-world experience. Highly organized, responsible and well-versed in many programming languages. Due to my preference for healthy lifestyle, selected food and spending time in the gym are some of my passions.",
              "contactmessage": "Feel free to send me your suggestions and offers!",
              "email": "benjoniksic@gmail.com",
              "phone": "+387 61299706",
              "address": {
                  "street": "",
                  "city": "Sarajevo",
                  "state": "Ilidža",
                  "zip": "71000"
              },
              "website": "",
              "resumedownload": "https://drive.google.com/file/d/1-oB85gJCgYx373bObalvpfld-lc8KGgS/view?usp=sharing",
              "social": [
                  {
                      "name": "facebook",
                      "url": "https://www.facebook.com/benjaminniksic87",
                      "className": "fa fa-facebook"
                  },
                  {
                      "name": "linkedin",
                      "url": "https://www.linkedin.com/in/benjoniksic/",
                      "className": "fa fa-linkedin"
                  },
                  {
                      "name": "instagram",
                      "url": "https://www.instagram.com/niksicbenjamin/",
                      "className": "fa fa-instagram"
                  },
                  {
                      "name": "github",
                      "url": "https://github.com/bniksic1",
                      "className": "fa fa-github"
                  }
              ]
          },
          "resume": {
              "skillmessage": "My Programming Language Proficiency",
              "education": [
                  {
                      "school": "Faculty of Electrical Engineering – Sarajevo",
                      "degree": "Student, Computer Science and Informatics",
                      "graduated": "Current",
                      "description": "Finalizing bachelor science degree"
                  },
                  {
                      "school": "Electrical Engineering High School - Sarajevo",
                      "degree": "High school diploma, Telecommunications",
                      "graduated": "July 2018",
                      "description": "Graduated with First Class Honours last two years"
                  }
              ],
              "work": [
                  {
                      "company": "Faculty of Electrical Engineering – Sarajevo",
                      "title": "Undergraduate teaching assistant for JAVA and C++",
                      "years": "Current",
                      "description": "Mentored students through office hours and one-on-one communication. Taught small groups of students focused on specific parts of coursework."
                  }
              ],
              "skills": [
                  "Java",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "ReactJS",
                  "Spring Boot",
                  "NodeJS",
                  "Express",
                  "Bootstrap",
                  "C++",
                  "C#",
                  "JavaFX",
                  "Julia",
                  "Android",
                  "Git",
                  "PostgreSQL",
                  "SQLite",
                  "MySQL",
                  "Photoshop"
              ]
          },
          "portfolio": {
              "projects": [
                  {
                      "title": "Movie Shop",
                      "category": "Spring-Boot ReactJS PostgreSQL",
                      "image": "MovieShop.png",
                      "url": "https://www.github.com/bniksic1/Movie-Shop"
                  },
                  {
                      "title": "Schedule Planning",
                      "category": "NodeJS ExpressJS MySQL",
                      "image": "SchedulePlanning.png",
                      "url": "https://github.com/bniksic1/SchedulePlanning"
                  },
                  {
                      "title": "Life Transactions Manager",
                      "category": "Java Android SQLite",
                      "image": "LifeTransactionsManager.png",
                      "url": "https://github.com/bniksic1/LifeTransactionsManager"
                  },
                  {
                      "title": "eChildhood",
                      "category": "JavaFX SQLite",
                      "image": "eChildhood.png",
                      "url": "https://github.com/bniksic1/eChildhood"
                  }
              ]
          },
          "testimonials": {
              "testimonials": [
                  {
                      "text": "Work hard in silence, let success make the noise.",
                      "user": "Frank Ocean"
                  },
                  {
                      "text": "If opportunity doesn't knock, build a door!",
                      "user": "Milton Berle"
                  }
              ]
          }
      }

  );

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
