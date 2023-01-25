import React from 'react';

import { MdError } from 'react-icons/md';
import { RxReload } from 'react-icons/rx';

const Error = ({ handleReset }) => {
  return (
    <div className='w-full sm:w-[400px] h-[250px] p-8 bg-white flex flex-col justify-between items-center rounded-xl shadow-lg'>
      <MdError size={35} fill='#FF6969' />
      <h1 className=' text-lg leading-3'>Something went wrong...</h1>
      <div className='w-full h-12 rounded-xl flex items-center justify-center p-4 hover:bg-gray-100 cursor-pointer' onClick={handleReset}>
        <RxReload size={24} fill='#556581' />
        <p className='px-4 truncate'>Retry</p>
      </div>
    </div>
  )
}

export default Error