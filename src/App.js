import React, { Component } from 'react';
import UserInputSection from './components/userInput/UserInputSection.js'
import RenderedPageSection from './components/renderedResult/RenderedPageSection.js'

class App extends Component{
  state = {
    general: {
      name: '',
      occupation: '',
      description: '',
      email: '',
      phoneNumber: ''
    },
    contact: {
      email: '',
      phone: '',
      location: '',
      website: '',
      linkedIn: '',
      twitter: ''
    },
    skills: [],
    educational: {
      schoolName: '',
      startDateStudy: '',
      endDateStudy: '',
      titleOfStudy: '',
    },
    practical: {
      companyName: '',
      positionTitle: '',
      mainTasks: [],
      startDate: '',
      endDate: ''
    },
    photo: {
      image: '',
      showImage: ''
    }
  }

  handleChange = (updatedObj, updatedProp, propValue) => {
    this.setState({
      [updatedObj]: {
        ...this.state[updatedObj],
        [updatedProp]: propValue 
      }
    })
  }
  
  handleListSubmit = (updatedProp, value) => {
    if(updatedProp === 'skills'){
      this.setState({
        [updatedProp]: value,
      })
    } else {
      this.setState({
        [updatedProp]: {
          ...this.state.practical,
          mainTasks: value
        }
      })
    }
  }

  handlePhotoChange = (photo) => {
    this.setState({
      photo: {
        ...this.state.photo,
        image: photo
      }
    })
  }

  togglePhoto = (value) => {
    this.setState({
      photo: {
        ...this.state.photo,
        showImage: {
          display: value
        }
      }
    }, () => console.log(this.state.photo.showImage.display))
  }

  render(){

    return (
      <div className='outer'>
        <div className='userInputSection'>
          <UserInputSection
          handleChange={this.handleChange}
          handleListSubmit={this.handleListSubmit}
          handlePhotoChange={this.handlePhotoChange}
          togglePhoto={this.togglePhoto}
          />
        </div>
        <div className='renderedPageSection'>
          <RenderedPageSection
          displayGeneral={this.state.general}
          displaySkills={this.state.skills}
          displayEducational={this.state.educational}
          displayPractical={this.state.practical}
          displayContact={this.state.contact}
          displayPhoto={this.state.photo}
          />
        </div>
       </div>
    );
  }
}

export default App;