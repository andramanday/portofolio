import React, { Component } from 'react';
import '../stylesheets/Personal.sass';
// import axios from 'axios'
import PersonalComp from '../../components/PersonalComp'

class Personal extends Component{
    constructor(props){
        super(props);

        this.props = {
            loading: true
        };
    }

    componentDidMount() {
        if (!this.props.personal) {
        this.props.getPersonalbyID('2')
        }
    }

    render(){
        const { personal } = this.props
        return(
            <div className="content">
                <div className="personal-title">
                    <h1>Personal Data</h1>
                    <hr/>
                </div>
                {personal &&
                  <PersonalComp 
                    name={personal.name}
                    pob={personal.pob}
                    dob={personal.dob}
                    phone={personal.mobile}
                    email={personal.email}
                    address={personal.location}
                  />
                }
            </div>
        );
    }
}

export default Personal;