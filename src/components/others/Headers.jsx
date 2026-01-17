import React from 'react'


function Headers({ onLogout , name}) {



  return (
    <div className='flex justify-between w-full font-helvatica mx-auto items-end'>
      <div>
        <h1 className='text-xl font-semibold'>Hello, <br />
      <span className="text-blue-500 text-2xl font-bold">{name} 👋</span>
      </h1>
      </div>
      <div>
        <button onClick={onLogout} className='bg-red-600 px-4 py-2 font-bold rounded-md active:scale-95 cursor-pointer'>Logout</button>
      </div>

    </div>
  )
}

export default Headers
