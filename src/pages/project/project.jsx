import React, { Component } from 'react';
import '../stylesheets/Portofolio.sass';
import Projects from './components/projects'

class Project extends Component{
    // eslint-disable-next-line no-useless-constructor
constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.projects) {
      this.props.getProject()
    }
    console.log(this.props.history);
  }

    render(){
        const { projects } = this.props
        return(
            <div className="content">
                    <div className="personal-title">
                        <h1>Portofolio</h1>
                        <hr/>
                    </div>
                    <div className="portofolio-content">
                    {projects && projects.map(p =>
                        <div
                            key={p.title}
                            className="box"
                            onClick={() => this.props.history.push(`/project-selected/${p.id}`)}>
                                <Projects
                                    imgurl={`http://api.antarra.tech/${p.imgurl}`}
                                    title={p.title}
                                    language={p.language}
                                    />
                        </div>
                    )}
                    </div>
            </div>
        );
    }
}

export default Project;