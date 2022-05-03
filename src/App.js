import React, { Component } from 'react';
import UserInputSection from './components/userInput/UserInputSection.js'
import RenderedPageSection from './components/renderedResult/RenderedPageSection.js'

class App extends Component{
  state = {
    general: {
      name: 'John Doe',
      occupation: 'General Manager',
      description: 'Service-driven General Manager with 3+ years of experience upholding excellent customer service standards in the food service industry. Dedicated to improving operations and increasing customer traffic.',
    },
    contact: {
      email: 'j.doe@gmail.com',
      phone: '(365)-323-2928',
      location: 'Cedar, MN',
      website: 'www.mywebsite.com',
      linkedIn: 'linkedIn.com/johndoe',
      twitter: '@JohnDoe'
    },
    skills: [],
    educational: {
      schoolName: 'Adelphi University',
      startDateStudy: '09/2012',
      endDateStudy: '06/2016',
      titleOfStudy: 'Business Administration'
    },
    practical: {
      companyName: 'Retail Ocean',
      positionTitle: 'General Manager',
      mainTasks: [],
      startDate: '04/2010',
      endDate: '05/2022'
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
        <div className='userInputSection'>
          <UserInputSection
          handleChange={this.handleChange}
          handleListSubmit={this.handleListSubmit}
          handlePhotoChange={this.handlePhotoChange}
          togglePhoto={this.togglePhoto}
          />
        </div>
       </div>
    );
  }
}

export default App;