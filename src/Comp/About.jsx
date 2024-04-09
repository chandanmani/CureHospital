import React from 'react'

const About = () => {
  return (
  <>
  <div className='flex pl-[250px]'>
    <div className='w-[350px] h-[380px] flex gap-6'>
        <img src="https://img.freepik.com/free-vector/hand-drawn-nurse-helping-patient_23-2148143590.jpg?w=740&t=st=1712676088~exp=1712676688~hmac=8a3152c41d06ee4cd94a8ad5c50cb413224c52b0b47b55e479a9fa11efb0a1c4" alt="" />

    </div>
    <div className='w-[400px] ml-[150px]'>
        <h1 className='text-2xl font-bold text-center py-3 '>About Hospital</h1>
        <p className='p-[20px] tracking-wider'>Hospitals are multifaceted healthcare facilities equipped with advanced medical technology, specialized departments, and skilled professionals. They offer comprehensive services, including emergency care, surgery, diagnostics, maternity care, rehabilitation, and specialized treatments for various illnesses and injuries.</p>
        <button className='p-3 bg-green-500 w-[200px] rounded-md  ml-[75px] mt-[30px    ]  ' >Read More</button>


    </div>



  </div>
  
  
  
  </>
  )
}

export default About