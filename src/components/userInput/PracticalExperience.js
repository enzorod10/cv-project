import React, { Component } from 'react';
import uniqid from 'uniqid'
import eyeIcon from '../../assets/eyeIcon.png'
import trashIcon from '../../assets/trashIcon.png'
import checkmarkIcon from '../../assets/checkmarkIcon.png'
import arrowIcon from '../../assets/arrowIcon.png'


class PracticalExperience extends Component{
    state = {
        task: {
            taskName: '',
            id: uniqid()
        },
        tasks: [],
    }

    handleChange = (updatedObj, updatedProp, propValue) => {
        if(updatedProp !== 'mainTasks'){
            this.props.handleChange(updatedObj, updatedProp, propValue)    
        }
        this.setState({
            task: {
                taskName: propValue,
                id: uniqid()
            }
        })
    }
    
    handleSubmit = () => {
        if (this.state.task.taskName.trim() !== ''){
            this.setState({
                tasks: this.state.tasks.concat(this.state.task)
            }, () => this.props.handleListSubmit('practical', this.state.tasks))
            this.setState({
                task: {
                    taskName: '',
                    id: uniqid()
                }
            })
        }        
       
    }
    
    toggleDisplay = () => {
        let displayStatus = document.querySelector('.practicalExperience').style.display
        if (displayStatus === 'flex'){
            document.querySelector('.practicalExperience').style.display = 'none'
            document.querySelector('.displayedTasks').style.display = 'flex'
        } else {
            document.querySelector('.displayedTasks').style.display = 'none'
            document.querySelector('.practicalExperience').style.display = 'flex'
        }   
    }

    deleteTask = (id) => {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        }, () => this.props.handleListSubmit('practical', this.state.tasks))
    }

    render(){
        return(
            <div className='outerPracticalExperience'>
                <div className='practicalExperience' style={{display:this.props.displayStatus}}>
                        <input placeholder='Company Name' id='companyName' type='text' onChange={(e) => this.props.handleChange('practical', e.target.id, e.target.value)}/>
                        <input placeholder='Title of Position' id='positionTitle' type='text' onChange={(e) => this.props.handleChange('practical', e.target.id, e.target.value)}/>
                        <div className='mainTasksContainer'>
                            <input placeholder='Main Tasks' id='mainTasks' value={this.state.task.taskName} type='text' onChange={(e) => this.handleChange('practical', e.target.id, e.target.value)}/>
                            <div className='editTasks'>
                                <img src={eyeIcon} alt='display tasks button' className='displayTasksButton' onClick={() => this.toggleDisplay()}/>   
                                <img alt='add task button' src={checkmarkIcon}className='addTaskButton'onClick={() => this.handleSubmit()}/>
                            </div>
                        </div>
                        <input placeholder='Starting Date' id='startDate' type='text' onChange={(e) => this.props.handleChange('practical', e.target.id, e.target.value)}/>
                        <input placeholder='Ending Date' id='endDate' type='text'  onChange={(e) => this.props.handleChange('practical', e.target.id, e.target.value)}/>
                </div>
                <div className='displayedTasks' style={{display: 'none'}}>
                    <img alt='go back button' src={arrowIcon} onClick={() => this.toggleDisplay()}/>
                        <div className='tasksContainer'> {this.state.tasks.map(task => {
                                return <div key={task.id} className='task'><img alt='delete task icon' src={trashIcon} onClick={() => this.deleteTask(task.id)}className='deleteTaskButton'/><li > {task.taskName} </li> </div>
                            })}
                        </div>
                </div>
            </div>
        )
    }
}

export default PracticalExperience;