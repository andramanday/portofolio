import React, { Component } from 'react'
import '../stylesheets/home.sass'

class Home extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (!this.props.about) {
        this.props.getAboutbyID('3')
        }
    }

    
    render(){
        const { about } = this.props
        return(
            <div className="content">
            {about &&
                <div className="textShow" 
                       dangerouslySetInnerHTML={{__html: about.description}} />
            }
            </div>
        );
    }
}

export default  Home;