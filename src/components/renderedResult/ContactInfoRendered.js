import React, { Component } from 'react';
import emailIcon from '../../assets/emailIcon.png'
import phoneIcon from '../../assets/phoneIcon.png'
import locationIcon from '../../assets/locationIcon.png'
import websiteIcon from '../../assets/websiteIcon.png'
import linkedInIcon from '../../assets/linkedInIcon.png'
import twitterIcon from '../../assets/twitterIcon.png'


class ContactInfoRendered extends Component{
    contentStatus = {
        email: {
            display: 'none'
        },
        phone: {
            display: 'none'
        },
        location: {
            display: 'none'
        },
        website: {
            display: 'none'
        },
        linkedIn: {
            display: 'none'
        },
        twitter: {
            display: 'none'
        },
        
    }

    filterThroughProps = (prop) => {
        for (let key in this.props.displayContact){
            if (this.props.displayContact[key].trim() !== ''){
                this.contentStatus[key] = {
                    display: 'flex'
                }
            }   
            else{
                this.contentStatus[key] = {
                    display: 'none'
                }
            }   
        }
    }

    render(){
    this.filterThroughProps();
        return(
            <div className='contactSectionRendered'>
                <div className='contactContainerRendered'>
                    <div style={this.contentStatus.email} className='emailRendered'> 
                        <img alt='' src={emailIcon}/> {this.props.displayContact.email}
                    </div>
                    <div style={this.contentStatus.phone} className='phoneRendered'> 
                        <img alt='' src={phoneIcon}/>{this.props.displayContact.phone}
                    </div>
                    <div style={this.contentStatus.location} className='locationRendered'> 
                        <img alt='' src={locationIcon}/> {this.props.displayContact.location}
                    </div>
                    <div style={this.contentStatus.website} className='websiteRendered'> 
                        <img alt='' src={websiteIcon}/>{this.props.displayContact.website}
                    </div>
                    <div style={this.contentStatus.linkedIn} className='linkedInRendered'> 
                        <img alt='' src={linkedInIcon}/>{this.props.displayContact.linkedIn}
                    </div>
                    <div style={this.contentStatus.twitter} className='twitterRendered'> 
                        <img alt='' src={twitterIcon}/>{this.props.displayContact.twitter}
                    </div>

                </div>
            </div>
        )
    }
}

export default ContactInfoRendered;