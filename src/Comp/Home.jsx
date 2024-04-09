import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='flex bg-green-500'>
        <h1 className='mt-5 text-2xl font-extrabold text-white'>CureWorld Hospital</h1>
        <nav>
          <ul className='m-5 flex px-[20px]'>
            <li className='px-[15px] text-black font-bold text-xl hover:text-white'>
              <Link to="/">Home</Link>
            </li>
            <li className='px-[15px] text-black font-bold text-xl hover:text-white'>
              <Link to="/About">About</Link>
            </li>
            <li className='px-[15px] text-black font-bold text-xl hover:text-white'>
              <Link to="/doctor">Doctors</Link>
            </li>
            <li className='px-[15px] text-black font-bold text-xl hover:text-white'>
              <Link to="/Treatment">Treatment</Link>
            </li>
            <li className='px-[15px] text-black font-bold text-xl hover:text-white'>
              <Link to="/Appointment">Appointment</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Home;
