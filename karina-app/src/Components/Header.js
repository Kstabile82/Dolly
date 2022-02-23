import React from "react";
import { NavLink } from "react-router-dom";


function Header() {

        return (
            <header style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}> 
                <h1>
                </h1>
                <nav className="navbar">
                     <NavLink exact to="/Home" className="Home">Home        </NavLink>
                    <NavLink to="/LogIn" className="Login">          Log In</NavLink> 
                    <NavLink to="/About" className="About">          About</NavLink>
                    <NavLink to="/Browse" className="Browse">        Try It Out</NavLink>  

                </nav>
            </header>
        );
    }
    export default Header;