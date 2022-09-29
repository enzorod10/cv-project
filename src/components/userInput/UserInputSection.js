import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo.js'
import ContactInformation from './ContactInformation.js';
import EducationalInfo from './EducationalInfo.js'
import PracticalExperience from './PracticalExperience.js'
import Skills from './Skills.js'


class UserInputSection extends Component{
    state = {
        generalInfo: {
            display: 'flex'
        },
        skills: {
            display: 'none'
        },
        educationalInfo: {
            display: 'none'
        },
        practicalExperience: {
            display: 'none'
        },
        contactInfo: {
            display: 'none'
        }
    }


    handleClick = (property) => {
        for (let key in this.state){
            this.setState({
                [key]: {
                    display: 'none'
                }
            })
        }
        this.setState({
            [property]: {
                display: 'flex'
            }
        })
        document.querySelector('.displayedTasks').style.display = 'none'

    }
    render(){
        return(
            <div className='infoInputContainer'>
                <div className='tabContainerOuter'>
                    <div className='tabContainer'> 
                        <div style={{backgroundColor: this.state.generalInfo.display === 'flex' ? 'rgba(0, 0, 0, 0.226)' : 'inherit'}} className='generalTab' onClick={() => this.handleClick('generalInfo')}> General </div>
                        <div style={{backgroundColor: this.state.contactInfo.display === 'flex' ? 'rgba(0, 0, 0, 0.226)' : 'inherit'}} className='contactTab' onClick={() => this.handleClick('contactInfo')}>Contact</div>
                        <div style={{backgroundColor: this.state.skills.display === 'flex' ? 'rgba(0, 0, 0, 0.226)' : 'inherit'}} className='skillsTab' onClick={() => this.handleClick('skills')}> Skills </div>
                        <div style={{backgroundColor: this.state.educationalInfo.display === 'flex' ? 'rgba(0, 0, 0, 0.226)' : 'inherit'}} className='educationTab' onClick={() => this.handleClick('educationalInfo')}> Education </div>
                        <div style={{backgroundColor: this.state.practicalExperience.display === 'flex' ? 'rgba(0, 0, 0, 0.226)' : 'inherit'}} className='experienceTab' onClick={() => this.handleClick('practicalExperience')}> Experience </div>
                    </div>
                </div>
                <GeneralInfo
                    handleChange={this.props.handleChange}
                    displayStatus={this.state.generalInfo.display}
                    handlePhotoChange={this.props.handlePhotoChange}
                    togglePhoto={this.props.togglePhoto}
                />
                <ContactInformation 
                    handleChange={this.props.handleChange}
                    displayStatus={this.state.contactInfo.display}
                />
                <Skills 
                    handleListSubmit={this.props.handleListSubmit}
                    displayStatus={this.state.skills.display}
                />
                <EducationalInfo 
                    handleChange={this.props.handleChange}
                    displayStatus={this.state.educationalInfo.display}
                />
                <PracticalExperience
                    handleChange={this.props.handleChange}
                    handleListSubmit={this.props.handleListSubmit}
                    displayStatus={this.state.practicalExperience.display}
                />
            </div>
        )
    }
}

export default UserInputSection;