import React, { Component } from 'react';
import '../stylesheets/Experience.scss';

class Experience extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    if (!this.props.experiences) {
      this.props.getExperience()
    }
  }

    render(){
        const { experiences } = this.props
        return(
            <div className="content">
                    <ul className="timeline">
                        {experiences && experiences.map(p =>
                        <li key={p.id}>
                            <div className={p.lr}>
                                <div className="flag-wrapper">
                                    <span className="flag">{p.position}</span>
                                    <span className="time-wrapper"><span className="time">{p.year}</span>
                                    </span>
                                </div>
                                <div className="desc"><h3>{p.title}</h3>{p.description}</div>
                            </div>
                        </li>
                        )}
                    </ul>
                
            </div>
        );
    }
}

export default Experience;