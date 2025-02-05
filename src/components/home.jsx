import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/F.png';
import bg from '../assets/bg.jpg';

function Home() {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleAuthAction = () => {
    if (username) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      setUsername(null);
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <div className="bg-red-400 w-full h-32 flex items-center justify-between px-8">
        <div>
          <img src={logo} className="w-20" alt="Logo" />
        </div>
        <div>
          <button
            onClick={handleAuthAction}
            className="border px-2 py-3 rounded-2xl bg-red-600 text-white border-none hover:bg-amber-700 duration-300"
          >
            {username ? 'LOG OUT' : 'LOG IN'}
          </button>
        </div>
      </div>

      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div>
          <h1 className="text-4xl pt-7 ml-7 text-center lg:text-left lg:text-7xl lg:pt-20 lg:pl-5">
            {username ? `Welcome ${username}!` : 'Welcome'}
          </h1>
        </div>
        <div>
          <p className="text-center w-full mt-12 lg:text-left lg:ml-7 lg:w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            similique eveniet ipsa cupiditate architecto, deserunt rem natus
            velit. Repellendus, doloribus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Inventore aspernatur voluptates dolor fugiat
            explicabo cupiditate ipsa possimus, natus aliquam perferendis dolorem
            beatae perspiciatis ipsum, quos expedita sint odit at nesciunt?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
