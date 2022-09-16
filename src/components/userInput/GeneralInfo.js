import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'

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

    downloadPDF = () => {
        document.querySelector('.cvPage').style.border = 'none'
        document.querySelector('.cvPage').style.maxHeight = 'none'
        document.querySelector('.cvPage').style.maxWidth = 'none'
        
        document.querySelector('.cvPage').style.width = '480px'
        document.querySelector('.cvPage').style.height = '630px'

        document.querySelector('.generalInfoRendered').style.padding = '2% 4% 1% 4%'
        document.querySelector('.contactContainerRendered').style.padding = '0% 4%'
        document.querySelector('.skillsRendered').style.padding = '0% 4%'
        document.querySelector('.educationalInfoRendered').style.padding = '0% 4%'
        document.querySelector('.practicalExperienceRendered').style.padding = '0% 4% 2% 4%'

        html2canvas(document.querySelector('.cvPage'), { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {

            const imgData = canvas.toDataURL('img/png')
            const pdf = new jsPDF({
            unit: 'px'
            })

            pdf.internal.pageSize.width = 736 * 0.4
            pdf.internal.pageSize.height = 1260 * 0.4

            pdf.addImage(imgData, 'PNG', 0, 0, 736 * 0.4, 1260 * 0.4)
            pdf.save('Generated-CV')

        })
        document.querySelector('.cvPage').style.border = '2px black solid'
        document.querySelector('.cvPage').style.maxHeight = '100%'
        
        document.querySelector('.cvPage').style.width = '470px'
        document.querySelector('.cvPage').style.height = '100%'

        document.querySelector('.generalInfoRendered').style.padding = '1%'
        document.querySelector('.contactContainerRendered').style.padding = '1%'
        document.querySelector('.skillsRendered').style.padding = '0% 1%'
        document.querySelector('.educationalInfoRendered').style.padding = '0% 1%'
        document.querySelector('.practicalExperienceRendered').style.padding = '0% 1% 1% 1%'
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
                <div className='optionsContainer'>
                    <div className='imageUploadContainer'>
                        <div>
                            Photo?
                            <input type='checkbox' onChange={(e) => this.toggleImage(e)}/>
                            <input style={{display: 'none'}} id='fileInput' type='file' onChange={e => this.handleChange(e)}/> 
                            <label style={this.state.showImage} htmlFor='fileInput'> Upload</label>
                        </div>
                    </div>
                    <div className='pdfDownloadContainer'>
                            <button onClick={() => this.downloadPDF()} className='pdfDownloadButton' id='pdfDownload' type='file' onChange={e => this.handleChange(e)}> Download PDF</button> 
                    </div>
                </div>
                
            </div>
        )
    }
}

export default GeneralInfo;