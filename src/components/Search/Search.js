import './Search.css'
import React from 'react'

export default function Search() {
    return (
        <div className="ui action input search-container">
            <input type="text" placeholder="Search..."/>
            <button className="ui violet button">Search</button>
        </div>
    )
}
