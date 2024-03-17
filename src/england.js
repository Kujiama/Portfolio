import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin,faGithub,faInstagram, faCodepen} from "@fortawesome/free-brands-svg-icons";
import {faFile, faUser} from "@fortawesome/free-solid-svg-icons";
import resume from "./pdf/resume.pdf";
import coverLetter from "./pdf/coverLetter.pdf";

// Import images
import Assignment2Img from "./img/Assignment2.png";
import TreactImg from "./img/Treact.png";
import AnimeDoggoImg from "./img/animedoggo.png";
import ChatAppImg from "./img/chatAppImg.png";
import WeatherAppImg from "./img/WeatherAppImg.png";
import MyDentImg from "./img/MyDent.png";


const info = {
  firstName: "England",
  lastName: "Pelenio",
  position: "Frontend Web Developer",
  gradient: "linear-gradient(to right, #b107d7, #a1d0f0)",
  contact: {
    email: "englandpelenio17@gmail.com",
  },
  socials: [
    {
      link: "https://www.linkedin.com/in/england-pelenio-812269219/",
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      label: "LinkedIn",
    },
    {
      link: "https://github.com/Kujiama",
      icon: <FontAwesomeIcon icon={faGithub} />,
      label: "GitHub",
    },
    {
      link: "https://www.instagram.com/e.ngl1sh/",
      icon: <FontAwesomeIcon icon={faInstagram} />,
      label: "Instagram",
    },
    {
      link: "https://codepen.io/kujiama",
      icon: <FontAwesomeIcon icon={faCodepen} />,
      label: "Codepen",
    },
    {
      link: resume,
      icon: <FontAwesomeIcon icon={faUser} />,
      label: "Resume",
    },
    {
      link: coverLetter,
      icon: <FontAwesomeIcon icon={faFile} />,
      label: "CoverLetter",
    }
    
  ],
  aboutMe:
    "I am a Frontend Web Developer with a passion for building responsive and intriguing web applications with great user experiences that positively impact the people around me.",
  
  bio:{
    intro: 
    "Hello there! I'm a Frontend Web Developer living in Canada, where the blend of technology and creativity ignites my passion for developing user-centric websites. My journey is characterized by a strong drive to learn and improve in the digital realm. With each project, I aim to develop not just functional, but also a delightful to websites.",
    whatIDo: {
      Educational: "I'm currently navigating through my final year in the Computer Programming and Analysis program at George Brown College. This experience has been instrumental in laying a solid foundation for my technical knowledge and sharpening my problem-solving skills",
      SelfLearning: "Alongside my academic commitments, I dedicate myself to honing my web development skills. I'm constantly learning current technologies and frameworks that can elevate my ability to create more responsive, accessible, and engaging web applications.",
      Projects: "I have worked on a variety of projects, from simple landing pages to complex web applications. I am always eager to take on new challenges and learn new technologies. I am currently seeking opportunities to work on projects that will allow me to grow and contribute to the community.",
    }
  },

  cta:"I'm always on the lookout for exciting opportunities and collaborations that will sharpen my skills and push the boundaries of web development. If my passion and portfolio resonate with you, let's connect to explore how we can create something incredible together.",

  stack:[
    {
      name: "HTML5",
      image: "https://img.icons8.com/color/48/000000/html-5.png",
    },
    {
      name: "CSS3",
      image: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "JavaScript",
      image: "https://img.icons8.com/color/48/000000/javascript.png",
    },
    {
      name: "React",
      image: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
      name: "NodeJS",
      image: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "ExpressJS",
      image: "https://img.icons8.com/color/48/000000/express.png",
    },
    {
      name: "MongoDB",
      image: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      name: "GraphQL",
      image: "https://img.icons8.com/color/48/000000/graphql.png",
    },
    {
      name: "TailwindCSS",
      image: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg", // Alternative SVG
    },
    {
      name: "Bootstrap",
      image: "https://img.icons8.com/color/48/000000/bootstrap.png",
    },
    {
      name: "Java",
      image: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
    },
    {
      name: "Python",
      image: "https://img.icons8.com/color/48/000000/python.png",
    },
    {
      name: "jQuery",
      image: "https://img.icons8.com/ios-filled/50/000000/jquery.png",
    },
    {
      name: "npm",
      image: "https://img.icons8.com/color/48/000000/npm.png",
    },

  ],
  
  project: [
    {
      name: "Treact Landing Page",
      description: "Landing page for a fictional company called Treact. built to be responsive and engaging.",
      DeploymentLink:"",
      GithubLink: "https://github.com/Kujiama/101367043_comp3123_assignment2",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: TreactImg,
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
      name: "AnimeDoggo",
      description: `project that uses Jikan Anime API in order to search for animes using only vanilla javascript (currently undergoing improvements)`,
      DeploymentLink: "https://anime-doggo.vercel.app/",
      GithubLink: "https://github.com/Kujiama/Treact-project",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: AnimeDoggoImg,
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
      name: "Employee Manager",
      description: "Project to manage employees and their information using CRUD operations.",
      GithubLink: "https://github.com/Kujiama/101367043_comp3123_assignment2",
      techStack: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Bootstrap"],
      image: Assignment2Img,
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
      name: "Chat App",
      description: "Chat that lets you talk to people using websockets",
      GithubLink: "https://github.com/Kujiama/101367043_lab_test1_chat_app",
      techStack: ["Socket.io", "ReactJS", "ExpressJS","TailwindCSS","MongoDB"],
      image: ChatAppImg,
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
      name: "Weather App",
      description: "a simple web application that allows users to retrieve current weather information for a specific location using the OpenWeather API using Async/Await and Fetch API to make requests and handle promises.",
      GithubLink: "https://github.com/Kujiama/101367043_comp3123_labtest2",
      techStack: ["React", "JavaScript"],
      image: WeatherAppImg,
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
      name: "MyDent",
      description: "Capstone project. A web application that allows admin to manage staff,patients and their inventory. Patients can book appointments and Staff can view their schedules and manage their patients.",
      GithubLink: "https://github.com/erdalozkaya71/capstone_2024",
      techStack: ["React", "NodeJS", "ExpressJS", "MongoDB","TailwindCSS"],
      image: MyDentImg,
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
  ],
};

export default info;
