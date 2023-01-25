import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { BsFillCheckCircleFill } from 'react-icons/bs'
import placeholder from '../assets/image.svg';

const DisplayImage = ({ imgSrc, id, handleReset }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  const link = id ? `${import.meta.env.VITE_SERVER_URL}/download/${id}` : '';

  return (
    <div className='w-full sm:w-[400px] h-[450px] p-8 bg-white flex flex-col justify-between items-center rounded-xl shadow-lg'>
      <BsFillCheckCircleFill size={35} fill='#219653' />
      <h1 className=' text-lg leading-3'>Uploaded Successfully!</h1>
      <div className='w-full h-[50%] bg-gray-100 rounded-xl'>
        <img src={imgSrc || placeholder} className='w-full h-full object-scale-down rounded-xl' alt='placeholder' />
      </div>
      <div className='w-full bg-gray-100 border-2 border-gray-200 p-[2px] rounded-lg flex justify-between items-center text-[10px]'>
        <p className='w-[80%] px-4 truncate'>
          {link}
        </p>
        <CopyToClipboard text={link} onCopy={handleCopy}>
          <span className={`w-[100px] p-2 ${copied ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded-lg cursor-pointer`}>
            {copied ? 'Link Copied' : 'Copy Link'}
          </span>
        </CopyToClipboard>
      </div>
      <button className='w-[240px] p-2 bg-gray-400 text-white text-sm rounded-lg cursor-pointer' onClick={handleReset}>Upload another image</button>
    </div>
  )
}

export default DisplayImage