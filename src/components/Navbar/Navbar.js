import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthUser from '../Auth/AuthUser';

export default function Navbar(props) {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            {
                AuthUser() === true ? <NavLink to='logout'>Logout</NavLink> : null 
            }
        </div>
    )
}
