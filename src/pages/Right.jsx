import React, { Component } from 'react'
import profilePic from '../assets/img/pic.png'

class Right extends Component{
    render(){
        return(
            <div className="right-container">
                <div className="right-wrapper">
                    <img src={profilePic} alt="profile" width="100%"/>
                    <div className="profile-name">
                        <h1>ANDRA MANDAY</h1>
                        <p>Back-End Developer</p>
                    </div>
                        <div className="nav-socialmedia">
                            <ul>
                                <li> <a className="text-primary" href="https://www.facebook.com/Dastan.Rizwan"><i className="fab fa-facebook"></i></a></li>
                                <li> <a className="text-info" href="https://twitter.com/andramanday"><i className="fab fa-twitter" ></i></a></li>
                                <li> <a className="text-warning" href="https://www.instagram.com/storyofmdy/"><i className="fab fa-instagram" ></i></a></li>
                                <li> <a className="text-primary" href="https://www.linkedin.com/in/andramanday/"><i className="fab fa-linkedin" ></i></a></li>
                                <li> <a className="text-danger" href="https://www.youtube.com/channel/UCebNH9-tHbTCnIyuqZjXPYA"><i className="fab fa-youtube" ></i></a></li>
                            </ul>
                        </div>
                </div>
            </div>
        );
    }
}

export default Right;