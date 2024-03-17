import info from "../../england";
import { Link } from "react-router-dom";
const link = {name: 'Contact me', to: '/contact', active: 'contact'}

const About = () => {
    return (
      <div
        id="about"
        className="flex flex-col justify-center items-center min-h-[calc(100vh-175px)] px-4 md:px-8"
      >
        <section className="about-me w-full max-w-4xl mx-auto">
          <div className="container">
            <h2 className="text-3xl font-bold mt-10 mb-5">About Me</h2>
            <p className="text-base text-gray-700">{info.bio.intro}</p>

            <div className="education mt-8">
              <h3 className="text-2xl font-semibold mb-3">Education</h3>
              <p className="text-base text-gray-700">
                {info.bio.whatIDo.Educational}
              </p>
            </div>
            <div className="self-learning mt-8">
              <h3 className="text-2xl font-semibold mb-3">Self-Learning</h3>
              <p className="text-base text-gray-700">
                {info.bio.whatIDo.SelfLearning}
              </p>
            </div>
            <div className="projects mt-8">
              <h3 className="text-2xl font-semibold mb-3">Projects</h3>
              <p className="text-base text-gray-700">{info.bio.whatIDo.Projects}</p>
            </div>
          </div>
          <div className="call-to-action mt-10">
            <p className="text-base text-gray-700">
              {info.cta} <Link to={link.to} className="text-violet-700"> <h1 className="text-l">{link.name}</h1> </Link>
            </p>
          </div>
        </section>

        <section className="skills w-full max-w-4xl mx-auto">
          <div className="container">
            <h2 className="text-3xl font-bold mt-10 mb-5">SKILLS</h2>
            <div className="skills-list grid grid-cols-2 md:grid-cols-3 gap-4">
              {info.stack.map((tech, index) => (
                <div
                  key={index}
                  className="skill-item bg-gray-100 p-4 rounded-md flex items-center justify-center text-center"
                >
                  <img src={tech.image} alt={tech.name} className="w-12 h-12" />
                  <p className="text-base text-gray-700 font-semibold ml-3">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
}
 
export default About;