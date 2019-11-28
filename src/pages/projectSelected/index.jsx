import React, { Component } from 'react';
import '../stylesheets/Portofolio.sass';
import serverCall from '../../config/serverCall'
import Loader from 'react-loader-spinner'


class projectSelected extends Component{
    constructor(props) {
        super(props);

        this.state = {
            product :'',
            loading: true
        }
    }

    componentDidMount() {
        serverCall({
            method:'GET',
            url:`/project/${this.props.location.pathname.split("/").slice(-1)[0]}`
        })
        .then(res=>{
            this.setState({product : res.data.project, loading: false})
            console.log(this.state.product)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    

    render(){
        const { title, imgurl, language, client, year, location, description } = this.state.product
        return(
                <div className="content">
                    <div className="personal-title">
                        <h1>Portofolio</h1>
                        <hr/>
                    </div>
                    <div className="portofolio-content">
                        
                        {/* {this.props.location.pathname.split("/").slice(-1)[0]} */}
                        {this.state.loading &&
                            <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            />
                        }
                        {this.state.product && 
                        <div className="image-kiri">
                            <img src={`http://api.antarra.tech/${imgurl}`} alt="img1" width="100%"/>
                            <div className="cont-desc">
                                <h3>{title}</h3>
                                <p>{language}</p>
                                <p>{year}</p>
                                <p>{client}</p>
                                <p>{location}</p>
                                <p>{description}</p>
                                <a href="/">GitHub</a>
                            </div>
                        </div>
                        }
                    </div>
            </div>
        )
    }
}

export default projectSelected