import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    
    axios
      .post('http://localhost:7000/user/login', loginData)
      .then((res) => {
        console.log(res);
        toast.success('Login successful');

        const userName = res.data.name;  
        const token = res.data.token;    
        
        if (userName && token) {
         
          localStorage.setItem('username', userName);
          localStorage.setItem('token', token);
          
          navigate('/');
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error('Login failed');
      });
  };

  return (
    <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white'>
        <ToastContainer/>
      <h1 className='text-5xl text-white text-center pt-20 lg:pt-10'>Login</h1>
      <div className='border-b-2 border-gray-500 rounded-2xl mt-5 mx-auto w-26'></div>
        <div className='border  bg-neutral-900 py-12 mx-7 mt-33 lg:mt-20 rounded-3xl lg:mx-[400px] md:mx-[300px]'>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-between px-15 text-xl my-4 lg:px-26'>
          <label htmlFor="">Email: </label>
          <input className='border rounded-lg' type="text"  name="email" id="" onChange={handleChange} />
        </div>
        <div className='flex justify-between px-5 text-xl my-4 lg:px-26'>
          <label htmlFor="">Password: </label>
          <input className='border rounded-lg' type="password" name="password" id="" onChange={handleChange} />
        </div>
        <div className='flex justify-center'>
        <button className='text-center border-2 text-lg px-4 py-2 rounded-2xl bg-white text-black  hover:bg-black hover:text-white transition duration-300' type="submit">Login</button>
        </div>
      </form>
      </div>
      <div className='flex justify-center mt-5 decoration-0'>
              <a href="/reg">Don't have an account? Sign up here</a>
      </div>
    </div>
  );
}

export default LoginPage;
