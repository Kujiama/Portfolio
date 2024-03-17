import info from '../../england'
import { TypeAnimation } from 'react-type-animation';
import { useEffect , useRef} from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min.js';
import './home.css'


const Home = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    console.log("Birds running", BIRDS);
    if (!vantaEffect.current) {
      console.log("Initializing VANTA");
      try {
        vantaEffect.current =BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 100.00,
            minWidth: 100.00,
            scale: 2.00,
            scaleMobile: 1.00,
            backgroundColor: 0xffffff,
            color1: 0xb107d7,
            birdSize: 0.50
        });
      } catch (error) {
        console.error("Error initializing VANTA:", error);
      }
    }
    return () => {
      if (vantaEffect) {
        console.log("Destroying VANTA");
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);
  

    return (
      <main
        ref={vantaRef}
        className="flex items-center justify-center min-h-[calc(100vh-175px)] overflow-hidden"
      >
        <div className="w-full px-4 mx-auto text-center sm:max-w-md md:max-w-lg lg:max-w-xl ">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
            Hi, I'm{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: info.gradient }}
            >
              {info.firstName}
            </span>
          </h1>
          <h2 className="mt-2 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-semibold">
            I'm a{" "}
            <TypeAnimation
              cursor={true}
              sequence={[info.position]}
              speed={10}
            />
          </h2>
          <p className="hidden sm:mt-5 sm:block sm:text-lg md:text-xl">
            {info.aboutMe}
          </p>

          <ul id="social-links" className="flex flex-wrap justify-center items-center gap-11 mx-5 my-5">
            {info.socials.map((social, index) => (
              // ignore last 2 social links
              index < info.socials.length - 2 && (
                <li key={index} className='social-link hover:text-violet-500 transition-colors duration-200'>
                  <a href={social.link} target="_blank" rel="noreferrer noopener" className="hover:text-violet-500 transition-colors duration-300 flex flex-col items-center justify-center">
                    <span className='text-2xl sm:text-3xl md:text-4xl'>
                      {social.icon}
                    </span>
                    <span className='social-link-text absolute'>
                      {social.label}
                    </span>
                  </a>
                </li>
              )
            ))}
          </ul>

          <ul id="professional-links" className='flex flex-wrap justify-center items-center gap-11 mx-5 my-8'>
            {info.socials.map((social, index) => (
              // only display last 2 social links
              index >= info.socials.length - 2 && (
                <li key={index} className='social-link hover:text-violet-500 transition-colors duration-200'>
                  <a href={social.link} target="_blank" rel="noreferrer noopener" className="hover:text-violet-500 transition-colors duration-300 flex flex-col items-center justify-center">
                    <span className='text-2xl sm:text-3xl md:text-4xl'>
                      {social.icon}
                    </span>
                    <span className='social-link-text absolute'>
                      {social.label}
                    </span>
                  </a>
                </li>
              )
            ))  
            }
          </ul>
        </div>
      </main>
    );
}
 
export default Home 