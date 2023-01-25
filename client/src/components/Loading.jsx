import React from 'react'

const Loading = () => {
  return (
    <div className='w-full sm:w-[400px] h-[150px] px-8 py-10 bg-white flex flex-col justify-between items-start rounded-xl shadow-lg'>
      <h1 className=' text-lg leading-3'>Uploading...</h1>
      <div className='w-full h-2 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden'>
        <div className='w-20 h-full bg-blue-500 -translate-x-52 animate-loading delay-150'></div>
      </div>
    </div>
  )
}

export default Loading