import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics?id=test">Topics (Example of React Router)</Link></li>
            <li><Link to="/basicform">Basic Form (Controlled Version)</Link></li>
            <li><Link to="/uncontrolled">Basic Form (Uncontrolled Version)</Link></li>
            <li><Link to="/hocexample">Higher Order Component Example</Link></li>            
            <li><Link to="/datafetch">Data Fetching</Link></li>
        </ul>
    )
}

export default Header