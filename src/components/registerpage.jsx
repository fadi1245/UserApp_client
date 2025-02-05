import React, { useState } from 'react'
import image from '../assets/bigimage.png'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Registerpage() {
    const [userdata,setUserdata]=useState({})
    const navigate = useNavigate();

    const handlechange=(e)=>{
        setUserdata({...userdata,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:7000/user/register',userdata).then(res=>{
        toast.success("Signed up")
          navigate('/login');

    })
    .catch(err=>{
      const errorMessage = err.response?.data?.message || "Sign up failed";
      toast.error(errorMessage);
    })
    }

  return (
    <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <ToastContainer/>
      <h1 className='text-5xl text-white text-center pt-20 lg:pt-10'>Sign Up</h1>
      <div className='border-b-2 border-gray-500 rounded-2xl mt-5 mx-auto w-26 lg:mb-10'></div>
      <div className='block lg:flex lg:justify-between lg:px-40'>
      <div className='flex justify-center py-10'>
         <img className='w-[150px] lg:w-[300px]' src={image} alt="" />
        </div>
        <div className=' bg-neutral-900 text-white py-16 mx-10 rounded-4xl border-2'>
        <form onSubmit={handleSubmit}>
        <div className='flex justify-between px-10 pb-4 md:px-50 lg:px-30 lg:text-2xl'>
        <label className='text-lg lg:mr-24' htmlFor="">Name</label>
        <input className='border rounded-lg' type='text' name='name'  onChange={handlechange}/>
        </div>
        <div className='flex justify-between px-10 pb-4 md:px-50 lg:px-30 lg:text-2xl'>
        <label className='text-lg' htmlFor="">email</label>
        <input className='border rounded-lg' type="text" name='email'  onChange={handlechange} />
        </div>
        <div className='flex justify-between px-10 pb-4 md:px-50 lg:px-30 lg:text-2xl'>
        <label className='text-lg' htmlFor="">password</label>
        <input className='border rounded-lg' type="password" name='password' onChange={handlechange} />
        </div>
        <div className='flex justify-between px-10 pb-4 md:px-50 lg:px-30 lg:text-2xl'>
        <label className='text-lg' htmlFor="">Age</label>
        <input className='border rounded-lg' type="number" name="age" id=""    onChange={handlechange} />
        </div>
        <div className='flex justify-center mt-3'>
        <button className='text-center border-2 text-lg px-4 py-2 rounded-2xl bg-white text-black  hover:bg-black hover:text-white transition duration-300' type='submit'>Create Account</button>
        </div>
      </form>
        </div>
      </div>
    </div>
  )
}

export default Registerpage
