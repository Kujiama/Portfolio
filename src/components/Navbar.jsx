import { useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import logo from '../img/logo.svg';

const links = [
    {name: 'home', to: '/', active: 'home'},
    // {name: 'about me', to: '/about', active: 'about'},
    {name: 'England Pelenio', to: '/about', active: 'about', img:logo, type: 'img'},
    {name: 'projects', to: '/Projects',active: 'projects'}
];

const Navbar = ({darkMode,handleDarkMode}) => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <nav className="w-full">
            <ul className="flex justify-center items-center text-lowercase text-base gap-2 md:gap-12 md:text-med">
                {links.map((link, index) => (
                <li key={index} className={`border-image-source ${link.active === active && !link.type ? 'active-class' : ''}`}>
                    {/* Replace 'active-class' with the equivalent Tailwind utilities if you have a specific style for active links */}
                    <Link to={link.to} onClick={() => setActive(link.active)} className="link-class">
                        {/* Replace 'link-class' with the equivalent Tailwind utilities for your links */}
                        {!link.type && <h1 className="text-l">{link.name}</h1>} 
                        {link.type && <img src={link.img} alt={link.name} className="w-20 h-20"/>}
                    </Link>
                </li>
                ))}
                
                {/* To do: 
                    Add Darkmode toggle button
                */}
            </ul>
        </nav>
    );
}
 
export default Navbar;