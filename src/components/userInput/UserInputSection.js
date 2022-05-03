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
                        <div className='generalTab' onClick={() => this.handleClick('generalInfo')}> General </div>
                        <div className='contactTab' onClick={() => this.handleClick('contactInfo')}>Contact</div>
                        <div className='skillsTab' onClick={() => this.handleClick('skills')}> Skills </div>
                        <div className='educationTab' onClick={() => this.handleClick('educationalInfo')}> Education </div>
                        <div className='experienceTab' onClick={() => this.handleClick('practicalExperience')}> Experience </div>
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