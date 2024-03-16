import info from "../../england";


const About = () => {
    return (
        <div id="about" className="flex flex-col justify-center items-center min-h-[calc(100vh-175px)] px-4 md:px-8">
            <section class="about-me w-full max-w-4xl mx-auto">
                <div class="container">
                    <h2 class="text-3xl font-bold mt-10 mb-5">About Me</h2>
                    <p class="text-base text-gray-700">{info.bio.intro}</p>
                    <div class="education mt-8">
                        <h3 class="text-2xl font-semibold mb-3">Education</h3>
                        <p class="text-base text-gray-700">{info.bio.whatIDo.Educational}</p>
                    </div>
                    <div class="self-learning mt-8">
                        <h3 class="text-2xl font-semibold mb-3">Self-Learning</h3>
                        <p class="text-base text-gray-700">{info.bio.whatIDo.SelfLearning}</p>
                    </div>
                    <div class="projects mt-8">
                        <h3 class="text-2xl font-semibold mb-3">Projects</h3>
                        <p class="text-base text-gray-700">{info.bio.whatIDo.Projects}</p>
                    </div>
                </div>
            </section>

            <section class="skills w-full max-w-4xl mx-auto">
                <div class="container">
                    <h2 class="text-3xl font-bold mt-10 mb-5">SKILLS</h2>
                    <div class="skills-list grid grid-cols-2 md:grid-cols-3 gap-4">
                        {info.stack.map((tech, index) => (
                            <div key={index} class="skill-item bg-gray-100 p-4 rounded-md flex items-center justify-center text-center">
                                <img src={tech.image} alt={tech.name} class="w-12 h-12" />
                                <p class="text-base text-gray-700 font-semibold ml-3">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default About;