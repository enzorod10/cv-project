import React, { Component } from 'react';

class ContactInformation extends Component{
    render(){
        return(
            <div className='contactInformation' style={{display:this.props.displayStatus}}>   
                <div className='contactContainer'> 
                    <input placeholder='Email' id='email' type='text' onChange={(e) => this.props.handleChange('contact', e.target.id, e.target.value)}/>
                    <input placeholder='Phone' id='phone' type='text' onChange={(e) => this.props.handleChange('contact', e.target.id, e.target.value)}/>
                    <input placeholder='Location' id='location' type='text' onChange={(e) => this.props.handleChange('contact', e.target.id, e.target.value)}/>
                    <input placeholder='Website' id='website' type='text' onChange={(e) => this.props.handleChange('contact', e.target.id, e.target.value)}/>
                    <input placeholder='LinkedIn'id='linkedIn' type='text' onChange={(e) => this.props.handleChange('contact', e.target.id, e.target.value)}/>
                    <input placeholder='Twitter' id='twitter' type='text' onChange={(e) => this.props.handleChange('contact', e.target.id, e.target.value)}/>
                </div>
            </div>
        )
    }
}

export default ContactInformation; 