import React, { Component } from 'react';

class SkillsRendered extends Component{

    render(){
        return(
            <div className='skillsRendered'>
                <h1> Skills </h1>
                <div className='skillsRenderedContainer'>
                    {this.props.displaySkills.map(skill => {
                        return <div key={skill.id}> {skill.skillName} </div>
                    })}
                </div>
            </div>
        )
    }
}

export default SkillsRendered;