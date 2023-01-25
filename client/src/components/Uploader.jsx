import React, { useState } from 'react';

import placeholder from '../assets/image.svg';

const Uploader = ({ setImage }) => {
  const [dragEnter, setDragEnter] = useState(false);

  const handleDragEnter = () => {
    setDragEnter(true);
  };

  const handleDragLeave = () => {
    setDragEnter(false);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(e.dataTransfer.files[0]);
    }
    setDragEnter(false);
  };

  return (
    <div className='w-full sm:w-[400px] h-[450px] p-8 bg-white flex flex-col justify-between items-center rounded-xl shadow-lg'>
      <h1 className=' text-lg'>Upload your image</h1>
      <p className='text-[10px] text-gray-500'>File should be Jpeg, Png,...</p>
      <div
        className={`w-full h-[50%] ${dragEnter ? 'bg-blue-200' : 'bg-gray-100'} border-2 border-blue-200 border-dashed rounded-xl`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={allowDrop}
        onDrop={handleDrop}
      >
        <div className='w-full h-full flex flex-col justify-around items-center'>
          <img src={placeholder} className={`w-[50%] h-[50%] bg-cover ${dragEnter ? ' bg-blue-200' : 'bg-gray-100'}`} alt='placeholder' />
          <p className={`text-sm text-gray-400 ${dragEnter ? 'bg-blue-200' : 'bg-gray-100'}`}>Drag & Drop your image here</p>
        </div>
      </div>
      <p className='text-sm text-gray-400'>Or</p>
      <label htmlFor='image' className='w-[150px] px-4 py-2 text-sm bg-blue-500 text-white rounded-lg'>Choose a file</label>
      <input type='file' id='image' accept='image/png, image/jpeg, image/jpg' name='image' className='hidden' onChange={handleUpload} />
    </div>
  )
}

export default Uploader