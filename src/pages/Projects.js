import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
    return (
        <div>
            <h1>
                Projects 
            </h1>
            <ul>
                <li>
                    <Link to="/projects/42">Project1</Link>
                </li>
                <li>
                    <Link to="/projects/1000">Project2</Link>
                </li>
                
            </ul>
            <ul>

            </ul>
        </div>
    )
}