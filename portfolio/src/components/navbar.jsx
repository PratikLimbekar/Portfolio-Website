import "./navbar.css";
import { useState, useEffect } from "react";

// SHOW NAVBAR ON FIRST SCROLL ONLY
// const NavbarShow = () => {
//     const [show, setshow] = useState(false);
// } 
// const controlNavbar = () => {
//     if (window.scrollY > 100) {
//         setshow(true);
//     }
//     else {
//         setshow(false);
//     }
// }

// useEffect(() => {
//     window.addEventListener('scroll', controlNavbar);

//     return () => {
//         window.removeEventListener('scroll', controlNavbar);
//     }
// })
export function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li id="Name"><a href="#name" id="name"> Portfolio: Pratik Limbekar</a></li>
                <li><a href="#home" className="links">GitHub</a></li>
                <li><a href="#home" className="links">LinkedIn</a></li>
                <li> <a href="#home" className="links">G-Mail</a></li>
            </ul>
        </div>
    )
}

