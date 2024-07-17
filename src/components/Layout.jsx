import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import 'animate.css';
import Navbar from "./Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const Layout = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        console.log('Toggling dark mode');
    }

    return(
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="flex flex-col min-h-screen justify-between">
                <div>
                    <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
                </div>
                <main className="flex-grow">
                    <Routes>
                        <Route exact path={'/'} element={<Home />} />
                        <Route exact path={'/about'} element={<About />} />
                        <Route exact path={'/projects'} element={<Projects />} />
                        <Route exact path={'/contact'} element={<Contact />} />
                    </Routes>
                </main>
                <div>
                    <footer className="flex flex-col items-center py-6 w-full opacity-70">
                        <p> Raul England Pelenio </p>
                        <p>© 2024</p>
                    </footer>
                </div>
            </div>
        </div>
    )

}
 
export default Layout;