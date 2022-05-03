import React, { Component } from 'react';
import userIcon from '../../assets/userIcon.png'


class GeneralInfoRendered extends Component{
    render(){
        if(this.props.displayPhoto.image === ''){
            this.props.displayPhoto.image = userIcon        
        }
        return(
            <div className='generalInfoRendered'>
                <div>
                    <div>
                        <div className='nameAndOccupation'>
                            <div className='nameRendered'>
                                {this.props.displayGeneral.name} 
                            </div>
                            <div className='occupationRendered'>
                                {this.props.displayGeneral.occupation}
                            </div>
                        </div>
                        <div className='description'>
                            {this.props.displayGeneral.description}
                        </div>
                    </div>
                    <div style={{display:this.props.displayPhoto.showImage.display}} className='photoContainerRendered'>
                        <img alt='User' src={this.props.displayPhoto.image}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralInfoRendered;