import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Doctor = ({ img, name }) => {
  return (
    <div className='mt-[50px]'>
      <img src={img} alt="Doctor" className='w-400px h-[300px]' />
      <h1 className='text-3xl font-semibold text-green-300'>{name}</h1>
      <div className='flex'>
        <FaFacebook className='pt-2 text-3xl ' />
        <FaInstagram className='pt-2 text-3xl'   />
        <FaTwitter  className='pt-2 text-3xl'    />
      </div>
    </div>
  );
};

export default Doctor;
