import './Home.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from '../Search/Search'
import Location from '../Location/Location'

export default function Home() {
    return (
        <div className="home-container">
            <img src="/logo-Placeholder.png" alt="logo-placeholder"/>
            <Search></Search>
            <Location></Location>
            <div className="home-button-container">
                <NavLink className="signin-btn" to='/login'>Log In</NavLink>
                <NavLink className="signup-btn" to='/signup'>Sing Up</NavLink>
            </div>
        </div>
    )
}
