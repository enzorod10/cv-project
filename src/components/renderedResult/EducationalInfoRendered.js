import React, { Component } from 'react';

class EducationalInfoRendered extends Component{
    render(){
        return(
            <div className='educationalInfoRendered'>
                <h1> Education</h1>
                <div className='educationalInfoRenderedContainer'>
                    <h2>
                        {this.props.displayEducational.schoolName}
                    </h2>
                    <h3>
                        {this.props.displayEducational.titleOfStudy}
                    </h3>
                    <div className='dateContainer'>
                        <div className='startDate'>
                            {this.props.displayEducational.startDateStudy}
                        </div> -
                        <div className='endDate'> 
                            {this.props.displayEducational.endDateStudy}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EducationalInfoRendered;