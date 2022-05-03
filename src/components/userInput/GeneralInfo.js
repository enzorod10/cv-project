import React, { Component } from 'react';


class GeneralInfo extends Component{
    state = {
        image: '',
        showImage: {
            display: 'none'
        }
    }

    characterCount = '';

    handleChange = e => {
        this.setState({
            image: URL.createObjectURL(e.target.files[0])
        }, () => this.props.handlePhotoChange(this.state.image))
    }

    toggleImage = e => {
        if (!e.target.checked){
            this.setState({
                showImage: {
                    display: 'none'
                }
            }, () => this.props.togglePhoto(this.state.showImage.display))
        } else {
            this.setState({
                showImage: {
                    display: 'flex'
                }
            }, () => this.props.togglePhoto(this.state.showImage.display))
        }

    }
    render(){
        if (this.state.showImage.display === 'none'){
            this.characterCount = 250
        } else {
            this.characterCount = 200
        }
        return(
            <div className='generalInformation' style={{display:this.props.displayStatus}}> 
                <div>
                    <input placeholder='Name' id='name' type='text' onChange={(e) => this.props.handleChange('general', e.target.id, e.target.value)}/>
                </div>
                <div>
                    <input placeholder='Occupation' id='occupation' type='text' onChange={(e) => this.props.handleChange('general', e.target.id, e.target.value)}/>
                </div>
                <div>
                    <textarea placeholder='Description' maxLength={this.characterCount} id='description' type='text' onChange={(e) => this.props.handleChange('general', e.target.id, e.target.value)}/>
                </div>
                <div className='imageUploadContainer'>
                    <div>
                        Photo?
                        <input type='checkbox' onChange={(e) => this.toggleImage(e)}/>
                        <input style={{display: 'none'}}id='fileInput' type='file' onChange={e => this.handleChange(e)}/> 
                        <label style={this.state.showImage} htmlFor='fileInput'> UPLOAD</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralInfo;