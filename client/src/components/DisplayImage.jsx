import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { BsFillCheckCircleFill } from 'react-icons/bs'
import placeholder from '../assets/image.svg';

const DisplayImage = () => {
  return (
    <div className='w-full sm:w-[400px] h-[450px] p-8 bg-white flex flex-col justify-between items-center rounded-xl shadow-lg'>
      <BsFillCheckCircleFill size={35} fill='#219653' />
      <h1 className=' text-lg leading-3'>Uploaded Successfully!</h1>
      <div className='w-full h-[50%] bg-gray-100 rounded-xl'>
        <img src={placeholder} className='w-full h-full bg-contain' alt='placeholder' />
      </div>
      <div className='w-full bg-gray-100 border-2 border-gray-200 p-[2px] rounded-lg flex justify-between items-center text-[10px]'>
        <p className='w-[80%] px-4 truncate'>https://images.yourdomain.com/photo-1496950866446-325...</p>
        <CopyToClipboard text='link'>
          <span className='w-[100px] p-2 bg-blue-500 text-white rounded-lg cursor-pointer'>Copy Link</span>
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default DisplayImage