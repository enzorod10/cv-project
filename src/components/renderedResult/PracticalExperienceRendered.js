import React, { Component } from 'react';

class PracticalExperienceRendered extends Component{
    render(){
        return(
            <div className='practicalExperienceRendered'>
                <h1> Professional Experience</h1>
                <h2>
                    {this.props.displayPractical.companyName}
                </h2>
                <h3>
                    {this.props.displayPractical.positionTitle}
                </h3>
                <div className='dateContainer'>
                    <div className='startDate'>
                        {this.props.displayPractical.startDate}
                    </div> -
                    <div className='endDate'> 
                        {this.props.displayPractical.endDate}
                    </div>
                </div>
                <div className='tasksContainerRendered'>
                    {this.props.displayPractical.mainTasks.map(task => {
                        return <li key={task.id}>{task.taskName}</li>
                    })}
                </div>
            </div>
        )
    }
}

export default PracticalExperienceRendered;