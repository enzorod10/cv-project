import React, { Component } from 'react';
import GeneralInfoRendered from './GeneralInfoRendered.js'
import ContactInfoRendered from './ContactInfoRendered.js'
import EducationalInfoRendered from './EducationalInfoRendered.js'
import PracticalExperienceRendered from './PracticalExperienceRendered.js'
import SkillsRendered from './SkillsRendered.js';

class RenderedPageSection extends Component{
    render(){
        return(
            <div className="cvPage">
                <GeneralInfoRendered 
                    displayGeneral={this.props.displayGeneral}
                    displayPhoto={this.props.displayPhoto}
                />
                <ContactInfoRendered 
                    displayContact={this.props.displayContact}
                />
                <SkillsRendered 
                    displaySkills={this.props.displaySkills}
                />
                <EducationalInfoRendered 
                    displayEducational={this.props.displayEducational}
                />
                <PracticalExperienceRendered
                    displayPractical={this.props.displayPractical}
                />
            </div>
        )
    }
}

export default RenderedPageSection;