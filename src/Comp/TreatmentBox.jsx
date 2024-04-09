import React from 'react';

const TreatmentBox = ({ url, header, descripte }) => {
  return (
    <>
      <div className='w-[400px] bg-green-300 mt-[70px] ml-[22px] shadow-md'>
        <p className='text-4xl text-center m-5 px-[150px] text'>{url}</p>
        <h1 className="text-center text-2xl text-black font-bold">{header}</h1>
        <p className='p-10 tracking-high'>{descripte}</p>
        <a href="#" className='block text-center p-5 text-xl'>Read More</a>
      </div>
    </>
  );
};

export default TreatmentBox;
