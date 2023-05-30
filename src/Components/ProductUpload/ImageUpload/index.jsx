import React, { Component } from 'react'


//Pinterest ref: https://www.pinterest.com/pin/340444053087664046/

class ImageUpload extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        fileStatus: 'not-uploaded',
         fileName : null // file name
      }
    }

    handleFileUpload = (event) => {
      const file = event.target.files[0];
      this.setState({ fileStatus: 'uploading', fileName: file.name });
  
      // Simulating file upload delay with setTimeout
      setTimeout(() => {
        // File upload completed
        this.setState({ fileStatus: 'uploaded' });
      }, 2000);
    };

   


  render() {

    let jsxElement;


    if (this.state.fileStatus === 'not-uploaded') {
      jsxElement = <h2 className='upload-h2'>File Upload</h2>;
    } else if (this.state.fileStatus === 'uploading') {
      jsxElement =<h2 className='upload-h2'>Uploading {this.state.fileName} .....</h2>;
     
    } else if (this.state.fileStatus === 'uploaded') {
      jsxElement = <h2 className='upload-h2'>Uploaded</h2>;
    }

    return (
      <div className='upload-div'>

        <div className='leftupload-div'>
            <div className='drag-to-upload'>
            <p> Drag Files to Upload</p>
            
            </div>
            
        </div>

        <div className='rightupload-div'>
        {jsxElement}
       
        </div>

        <div className='buttonupload-div'>
        <input type="file" className="file-input" onChange={this.handleFileUpload} />

        </div>
        
      </div>
    )
  }
}

export default ImageUpload
