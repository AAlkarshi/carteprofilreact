import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

//Tableau des compétences,niveau 
const skillsData = [
  {
    skill: "HTML",
    level: "Expert",
    color: "#fcc159"
  },

  {
    skill: "CSS",
    level: "Expert",
    color: "#138cf4"
  },

  {
    skill: "PHP",
    level: "intermédiaire",
    color: "#7b68ee"
  },

  {
    skill: "SQL",
    level: "intermédiaire",
    color: "#2662AE"
  },

  {
    skill: "Javascript",
    level: "Débutant",
    color: "#ffff00"
  },

  {
    skill: "React",
    level: "Débutant",
    color: "#00ffff"
  },

  {
    skill: "Symfony",
    level: "Débutant",
    color: "#f0f8ff"
  },


  {
    skill: "Git & Github",
    level: "intermédiaire",
    color: "#E84F33"
  },

  
];

//AFFICHAGE DE PAGE
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

//Avatar photo de profil
const Avatar = () => {
  return (
    <div>
      <img
        className="avatar"
        src="PhotoProfil.jpg"
        alt="Abdullrahman Al karshi"
      />
    </div>
  );
};

// Présentation
const Intro = () => {
  return (
    <div>
      <h2>Abdullrahman Al karshi</h2>
      <p>
      Développeur Web full stack, expert en HTML, CSS, PHP, JavaScript, MySQL, et Symfony.
      Avec des expériences dans la création de sites multiplateformes et en cours d'apprentissage de React.
      </p>
    </div>
  );
};

//Listes des Compétences
const SkillList = () => {
  const skills = skillsData;

  return (
    <div className="skill-list">
      {skills.map((skill) => {
        return <Skill skillObj={skill} key={skill.skill} />;
      })}
    </div>
  );
};

//Compétences avec ajout d'émoji en utilisant les props
const Skill = ({ skillObj }) => {
  const { skill, level, color } = skillObj;
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Débutant" && "👶🏽"}
        {level === "intermédiaire" && "👍"} 
        {level === "Expert" && "💪🏽"}
      </span>
    </div>
  );
};

//Route
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
