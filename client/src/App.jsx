import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Uploader, Loading, DisplayImage, Error } from './components'

const App = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [image, setImage] = useState('');
  const [id, setId] = useState('');
  const [imgSrc, setImageSrc] = useState('');

  const handlePostImage = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', image);
      const res = await axios.post(import.meta.env.VITE_SERVER_URL, formData);
      setId(res.data._id);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(true);
    }
  }

  const handleSearchImage = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/images/${id}`);
      setImageSrc(res.data.src);
      setLoading(false);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(true);
    }
  }

  const handleReset = () => {
    setLoading(false);
    setSuccess(false);
    setError(false);
    setImage('');
    setId('');
    setImageSrc('');
  }

  useEffect(() => {
    if (image !== '') {
      handlePostImage();
    }
  }, [image]);

  useEffect(() => {
    if (id !== '') {
      handleSearchImage();
    }
  }, [id]);

  const Container = ({ setImage, imgSrc, id }) => {
    if (success) {
      return <DisplayImage imgSrc={imgSrc} id={id} handleReset={handleReset} />
    }
    if (error) {
      return <Error handleReset={handleReset} />
    }
    if (loading) {
      return <Loading />
    }
    return <Uploader setImage={setImage} />
  }

  return (
    <div className='w-full min-h-[100vh] bg-gray-50 text-gray-700 text-center grid place-items-center relative'>
      <Container image={image} setImage={setImage} imgSrc={imgSrc} id={id} />
      <p className='absolute bottom-2 font-footer text-sm text-gray-400'>created by <span className='font-bold'>mqdo</span> - devChallenges.io</p>
    </div>
  )
}

export default App