import React, { Component } from 'react'
import './stylesheet/Profile.sass'

class Profile extends Component{

    render(){
        return(
            <div className="main-profile">
                <div className="profile-data">
                    <h2 className="text-center mt-4">Profile<span className="text-info">Data</span></h2>
                    <hr className="mb-4"/>
                    <div className="isi-data">
                        <div className="ng-binding"><i className="fa fa-user"></i>Name</div>
                        <div className="ng-binding text-info">Andra</div>
                    </div>
                    <div className="isi-data">
                        <div className="ng-binding"><i className="fa fa-baby"></i>Place of birth</div>
                        <div className="ng-binding text-info">Pariaman</div>
                    </div>
                    <div className="isi-data">
                        <div className="ng-binding"><i className="fa fa-calendar"></i>Date of birth</div>
                        <div className="ng-binding text-info">April 9th 1989</div>
                    </div>
                    <div className="isi-data">
                        <div className="ng-binding"><i className="fa fa-phone"></i>Phone</div>
                        <div className="ng-binding text-info">+62 812-8090-0304</div>
                    </div>
                    <div className="isi-data">
                        <div className="ng-binding"><i className="fa fa-envelope"></i>Email</div>
                        <div className="ng-binding text-info">andra.manday@gmail.com</div>
                    </div>
                    <div className="isi-data">
                        <div className="ng-binding"><i className="fa fa-map-marker"></i>Address</div>
                        <div className="ng-binding text-info">Jakarta, Indonesia</div>
                    </div>
                </div>

                <div className="profile-data">
                    <h2 className="text-center mt-4">Profile<span className="text-info">Data</span></h2>
                    <hr className="mb-4"/>
                    <div className="education-data">
                        <div><h5>2007 - 2011</h5></div>
                        <div>
                            <h5>Bachelor Degree / Riau University</h5>
                            <p className="text-justify">Bachelor Degree of Information Management from Riau University. Graduated with honors. And start working in oil and gas company. Started many programming projects at the college. Participate in several programming competitions.</p>
                        </div>
                    </div>
                    <div className="education-data">
                        <div><h5>2004 - 2007</h5></div>
                        <div>
                            <h5>Senior high School / SMA N 1 Pariaman</h5>
                            <p className="text-justify">Bachelor Degree of Information Management from Riau University. Graduated with honors. And start working in oil and gas company. Started many programming projects at the college. Participate in several programming competitions.</p>
                        </div>
                    </div>
                    <div className="education-data">
                        <div><h5>2001 - 2004</h5></div>
                        <div>
                            <h5>Junir high School / SMP N 1 Pariaman</h5>
                            <p className="text-justify">Bachelor Degree of Islamic Economics from Bogor Agricultural University. Graduated with honors. And start learning programming with self-taught. Started many programming projects at the college. Participate in several programming competitions.</p>
                        </div>
                    </div>
                    <div className="education-data">
                        <div><h5>1998 - 2001</h5></div>
                        <div>
                            <h5>Elementary School / SD N 09 Pauh Pariaman</h5>
                            <p className="text-justify">in 1999, my parent make decision to transfer my school at city, lots of experience and make me better.</p>
                        </div>
                    </div>
                    <div className="education-data">
                        <div><h5>1995 - 1998</h5></div>
                        <div>
                            <h5>Elementary School / SD N 32 Kampung Sagit</h5>
                            <p className="text-justify">SDN 32 Kampung Sagit is my first formal school at my hometown, Lots of achievements and also experience gained.</p>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default Profile;