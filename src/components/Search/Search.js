import './Search.css'
import React from 'react'

export default function Search() {
    return (
        <div className="search-container">
            <input className="search-bar" type="text" placeholder="Search..."/>
            <button className="search-btn">Search</button>
        </div>
    )
}
