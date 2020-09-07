import './Search.css'
import React from 'react'

export default function Search() {
    return (
        <div className="ui action input">
            <input type="text" placeholder="Search..."/>
            <button className="ui button">Search</button>
        </div>
    )
}
