import React, { Component } from 'react';
import uniqid from 'uniqid';
import trashIcon from '../../assets/trashIcon.png'
import checkmarkIcon from '../../assets/checkmarkIcon.png'

class Skills extends Component{
    state = {
        value: {
            skillName: '',
            id: uniqid()
        },
        allSkills: []
    }

    getValue = (value) =>{
        this.setState({
            value: {
                skillName: value,
                id: uniqid(),
            }
        })
    }

    grabAllSkills = () => {
        if(this.state.value.skillName.trim() !== ''){
            this.setState({
                value: {
                    skillName: this.state.value.skillName,
                    id: uniqid()
                },
                allSkills: this.state.allSkills.concat(this.state.value),
            }, () => this.props.handleListSubmit('skills', this.state.allSkills))
            this.setState({
                value: {
                    skillName: '',
                    id: uniqid()
                }
            })
        }      
    }

    handleSubmit = () => {
        this.grabAllSkills();
    }

    deleteSkill = (id) => {
        this.setState({
            allSkills: this.state.allSkills.filter(skill => skill.id !== id)
        }, () => this.props.handleListSubmit('skills', this.state.allSkills))

    }

    render(){
        return(
            <div className='skills' style={{display:this.props.displayStatus}}>
                <div>
                    <input type='text' id='skills' placeholder='Add Skill..' value={this.state.value.skillName} onChange={e => this.getValue(e.target.value)}/>
                    <img src={checkmarkIcon} alt='add skill icon' className='addSkill' onClick={e => this.handleSubmit()}/>
                </div>
                <div className='skillsContainer'>
                    {this.state.allSkills.map(skill => {
                        return <div key={skill.id} className='skill'><div>{skill.skillName}</div><img alt='trash icon' src={trashIcon} onClick={() => this.deleteSkill(skill.id)}/></div>
                    })}
                </div>
            </div>
        )
    }
}

export default Skills;