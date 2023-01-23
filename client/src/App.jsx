import React, { useState, useEffect } from 'react'

import { Uploader, Loading, DisplayImage, Error } from './components'

const App = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (image) {
      console.log(image)
    }
  }, [image])

  const Container = ({ image, setImage }) => {
    if (success) {
      return <DisplayImage />
    }
    if (error) {
      return <Error />
    }
    if (loading) {
      return <Loading />
    }
    return <Uploader image={image} setImage={setImage} />
  }

  return (
    <div className='w-full min-h-[100vh] bg-gray-50 text-gray-700 text-center grid place-items-center relative'>
      <Container image={image} setImage={setImage} />
      <p className='absolute bottom-2 font-footer text-sm text-gray-400'>created by <span className='font-bold'>mqdo</span> - devChallenges.io</p>
    </div>
  )
}

export default App