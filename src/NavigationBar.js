import React from 'react';
import {NavLink} from 'react-router-dom';


const NavigationBar =(props)=> {

    return <nav className="navbar">
      <NavLink
         exact
         className="navbar-link"
         to="/"
       >
         Home
       </NavLink>
       <NavLink
         exact
         className="navbar-link"
         to="/profile"
       >
         Profile
       </NavLink>
       <NavLink
         className="navbar-link"
         to="/assignments"
       >
         Assignments
       </NavLink>

       <NavLink
         exact
         className="navbar-link"
         to="/login"
       >
         Login/Signup
       </NavLink>

     </nav>  
}

export default NavigationBar;