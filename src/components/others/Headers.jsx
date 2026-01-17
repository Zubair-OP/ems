import React from 'react'


function Headers({ onLogout , name}) {



  return (
    <div className='flex items-end justify-between w-full font-helvatica mx-auto gap-4 flex-wrap md:flex-nowrap pb-4'>
      <div>
        <h1 className='text-lg md:text-xl font-semibold'>Hello, <br />
      <span className="text-blue-500 text-2xl md:text-3xl font-bold">{name} 👋</span>
      </h1>
      </div>
      <div>
        <button onClick={onLogout} className='bg-red-600 px-4 py-2 font-bold rounded-md active:scale-95 cursor-pointer text-sm md:text-base'>Logout</button>
      </div>

    </div>
  )
}

export default Headers
