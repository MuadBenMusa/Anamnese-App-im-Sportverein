import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/Exercise/">Exercise</NavLink></li>
                    <li><NavLink to="/TrainingsPlan/">TrainingsPlan</NavLink></li> 
                     <li><NavLink to="/Athlete/">Athlete</NavLink></li> 
                    <li><NavLink to="/Setting/">Setting</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;