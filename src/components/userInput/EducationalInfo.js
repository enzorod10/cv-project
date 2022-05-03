import React, { Component } from 'react';

class EducationalInfo extends Component{
    render(){
        return(
            <div className='educationalInformation' style={{display:this.props.displayStatus}}>
                    <input placeholder='School Name' id='schoolName' type='text' onChange={(e) => this.props.handleChange('educational', e.target.id, e.target.value)}/>
                    <input placeholder='Title of Study' id='titleOfStudy' type='text' onChange={(e) => this.props.handleChange('educational', e.target.id, e.target.value)}/>
                    <input placeholder='Starting Date' id='startDateStudy' type='text' onChange={(e) => this.props.handleChange('educational', e.target.id, e.target.value)}/>
                    <input placeholder='Ending Date' id='endDateStudy' type='text' onChange={(e) => this.props.handleChange('educational', e.target.id, e.target.value)}/>
            </div>
        )
    }
}

export default EducationalInfo; 