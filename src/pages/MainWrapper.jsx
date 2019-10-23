import React, { Component } from 'react';
import './stylesheet/style.sass';
import photoProfile from '../assets/img/profile.png'
import Home from './home/Home'
import Profile from './profile/Profile'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

class MainWrapper extends Component{
    render(){
        return(
            <Router>
            <div className="main-wrapper">
                <div className="wrapper">
                    <div className="sisi-kiri">
                        <div className="profile-photo">
                            <img src={photoProfile} alt="profile" width="100%"/>
                            <div className="profile-identitas">
                                <h1 className="mb-0">ANDRA</h1>
                                <hr/>
                                <p>Back-End Developer</p>
                            </div>
                            <div className="profile-medsos">
                                <div className="navmedsos">
                                    <ul>
                                        <li><a href="https://www.facebook.com/Dastan.Rizwan" title="facebook">s<i className="fab fa-facebook animated"></i></a></li>
                                        <li><a href="https://twitter.com/andramanday"><i className="fab fa-twitter" ></i></a></li>
                                        <li><a href="https://www.instagram.com/storyofmdy/"><i className="fab fa-instagram" ></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/andramanday/"><i className="fab fa-linkedin" ></i></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCebNH9-tHbTCnIyuqZjXPYA"><i className="fab fa-youtube" ></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sisi-kanan">
                        <nav>
                            <ul>
                                <NavLink activeClassName="active" to="/" exact><i className="fa fa-home"></i><span>HOME</span></NavLink>
                                <NavLink activeClassName="active" to="/profile"><i className="fa fa-user"></i><span>PROFILE</span></NavLink>
                                <NavLink activeClassName="active" to="/resume"><i className="fa fa-file-alt"></i><span>RESUME</span></NavLink>
                                <NavLink activeClassName="active" to="/portofolio"><i className="fa fa-home"></i><span>PORTOFOLIO</span></NavLink>
                                <NavLink activeClassName="active" to="/contact"><i className="fa fa-users"></i><span>CONTACT</span></NavLink>
                            </ul>
                        </nav>
                        <div>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/profile" component={Profile}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
        )
    }
}

export default MainWrapper;