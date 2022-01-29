import React from 'react';
import { NavLink } from 'react-router-dom';
// import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
// import ProjectsContainer from '../containers/ProjectsContainer';

export default function Home() {
  return <div className='card center-card'>
        <p>Feeling overwhelmed about all the things you have to do?</p>
        <p>Don't panic, just get organized!</p>
        <NavLink to="/projects">
            <input type="button" value="Click Here to View or Start Projects"/>
        </NavLink>
        {/* <Router>
            <Switch>
                <Route path="/projects" component={ProjectsContainer} />
                <Route path="/" component={Home} />
            </Switch>
        </Router> */}
    </div>;
}
