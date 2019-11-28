import React, { Component } from 'react'

class PersonalComp extends Component{

    render(){
        return(
            <div>
                <div className="personal-content">
                    <div className="label"><i className="fa fa-user"></i> Name</div>
                    <div className="data">{this.props.name}</div>
                </div>
                <div className="personal-content">
                    <div className="label"><i className="fa fa-baby"></i>Place of Birth</div>
                    <div className="data">{this.props.pob}</div>
                </div>
                <div className="personal-content">
                    <div className="label"><i className="fa fa-calendar"></i>Date of Birth</div>
                    <div className="data">{this.props.dob}</div>
                </div>
                <div className="personal-content">
                    <div className="label"><i className="fa fa-phone"></i>Phone</div>
                    <div className="data">{this.props.phone}</div>
                </div>
                <div className="personal-content">
                    <div className="label"><i className="fa fa-envelope"></i> Email</div>
                    <div className="data">{this.props.email}</div>
                </div>
                <div className="personal-content">
                    <div className="label"><i className="fa fa-map-marker"></i> Location</div>
                    <div className="data">{this.props.address}</div>
                </div>
            </div>
        );
    }
}

export default PersonalComp;