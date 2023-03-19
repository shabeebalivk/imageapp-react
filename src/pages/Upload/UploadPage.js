import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Home/NavBar';
import './UploadImage.css'

function ImageUpload() {
  
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');

  const navigate = useNavigate()

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new form data object
      const formData = new FormData();
      formData.append('image', file);
      formData.append('title', title);
      formData.append('userId', localStorage.getItem('userId'));
      const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
      // Send a POST request to the image upload API
      const response = await axios.post(process.env.REACT_APP_HOST + '/upload', formData, {headers});
      if(response.status === 201){
        alert('uploaded')
        navigate('/home')
      }
    } catch (error) {
      alert('upload failed')
      console.log(error)
      // Set the error message
      // setError(error.message);
    }
  };

  return (
    <div>
        <Navbar />
        <div className="image-upload-container">
        <h1>Upload an Image</h1>
        <form onSubmit={handleFormSubmit}>
            <div className="form-group"> 
              <input placeholder='Title' type="text" id="title" name="title" value={title} onChange={handleTitleChange}/>
              <input type="file" id="image" name="image" onChange={handleFileInputChange} />
            </div>
            <button type="submit" className="submit-btn">Upload</button>
        </form>
        </div>
    </div>
  );
}

export default ImageUpload;
