import React, { Component } from 'react'
import './stylesheets/Style.sass'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import { registerNav } from '../modules/Navigation'
import Right from './Right';
import ContainerHome from './home/'
import ContainerPersonal from './personal/'
import ContainerExperience from './experience/'
import ContainerProject from './project/'
import projectSelected from './projectSelected/'


class Main extends Component{
    render(){
        return(
            <Router ref={registerNav}>   
            <div className="main-container">
                <Right/>
                <div className="left-container">
                    <div className="left-wrapper">
                        <nav>
                            <ul>
                                <NavLink activeClassName="active" to="/" exact><i className="fa fa-home"></i><span>HOME</span></NavLink>
                                <NavLink activeClassName="active" to="/personal"><i className="fa fa-user"></i><span>PERSONAL</span></NavLink>
                                <NavLink activeClassName="active" to="/experience"><i className="fa fa-heartbeat"></i><span>JOURNEY</span></NavLink>
                                <NavLink activeClassName="active" to="/project"><i className="fa fa-home"></i><span>PROJECTS</span></NavLink>
                                <NavLink activeClassName="active" to="/contact"><i className="fa fa-users"></i><span>GITHUB</span></NavLink>
                            </ul>
                        </nav>
                        <AnimatedSwitch
                            atEnter={{ opacity: 0 }}
                            atLeave={{ opacity: 0 }}
                            atActive={{ opacity: 1 }}
                            className="switch-wrapper"
                        >
                            <Route exact path="/" component={ ContainerHome }/>
                            <Route path="/personal" component={ ContainerPersonal } />
                            <Route path="/experience" component={ ContainerExperience } />
                            <Route path="/project" component={ ContainerProject } />
                            <Route key="projectSelected" path="/project-selected" component={projectSelected} />
                            <Redirect to="/" />
                        </AnimatedSwitch>
                    </div>
                </div>
            </div>
            </Router>
        );
    }
}

export default Main;