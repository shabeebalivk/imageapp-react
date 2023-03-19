import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ListingComponent from './ListingComponent';
import Navbar from './NavBar';

const HomePage = () => {

  const [images, setImages] = useState([])
  const navigate = useNavigate()

  const getImages = async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/images', {
          params: {
          userId: localStorage.getItem("userId")
        }})
      console.log(response.data);
      setImages(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      getImages()
    }else{
      navigate('/login')
    }
  }, [])
  
  return (
    <div>
      <Navbar />
      <ListingComponent documents={images} />
    </div>
  );
};

export default HomePage;
