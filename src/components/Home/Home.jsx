import info from '../../england'
import { TypeAnimation } from 'react-type-animation';
import { useEffect , useRef} from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min.js';
import Content from './Content';
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
      <div ref={vantaRef} className="flex items-center justify-center min-h-[calc(100vh-175px)] overflow-hidden">
        <Content info={info} TypeAnimation={TypeAnimation} />
      </div>
    );
}
 
export default Home 