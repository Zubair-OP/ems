import React, { useState } from 'react'

function Login({ handleLogin }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const formSubmitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen font-helvatica'>
      <h1 className=' text-2xl font-bold'>Login</h1>
     <div className='border-2 border-emerald-600 p-20 rounded-2xl mt-4'>
      <form onSubmit={(e)=>{
        formSubmitHandler(e)
      }} className='flex flex-col gap-4'>
        <input required className='border-2 min-w-68 border-emerald-600 rounded-full px-6 py-3 text-md outline-none' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email" 
        placeholder='Enter Your Email'/>
        <input required className='border-2 min-w-68 border-emerald-600 rounded-full px-6 outline-none py-3 text-md'
        value={password}
        type="Password" 
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter Your Password'/>
        <button className='rounded-full cursor-pointer mt-8 px-8 py-3 bg-emerald-500 text-white text-lg font-bold'>Login</button>
      </form>

     </div>
    </div>
  )
}

export default Login
