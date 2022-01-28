import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default function Home() {
  return <div>
        <h1>Mountains to Molehills</h1>
        <p>Feeling overwhelmed about all the things you have to do?</p>
        <p>Don't panic, just get organized!</p>
        <NavLink to="/projects">
            <input type="button" value="Click Here to View or Start Projects"/>
        </NavLink>
    </div>;


}
