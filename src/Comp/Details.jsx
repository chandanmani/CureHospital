import React from 'react';

const Details = () => {
  return (
    <div className="p-10">
      <div className='w-3xl h-[50vh] bg-white-400'>
        <h1 className='inline underline mr-2 text-2xl font-extrabold text-green-300 '>Book</h1><span className='text-green-300  font-bold  text-2xl underline'>Appointment</span><h1 className='inline-block text-green-300  font-bold  text-2xl pl-2 underline'> at Cure World Hospital</h1>
        <div className='mt-10 bg--300 w-[80%] h-[350px] p-5 shadow-md ml-[120px] '>
          <form action="">
            <label htmlFor="name" className='bg-green-300 p-3 m-5 rounded-md w-[240px] inline-block pl-5 '>Patient Name:</label>
            <input type="text" id='name' className=" m-5 p-1 border-2" />
            <label htmlFor="Doct" className="bg-green-300 p-3 mb-2 rounded-md w-2xl w-[240px] inline-block pl-5">Doctor Name:</label>
            <select name="Doct" id="Doct" className="m-5 p-2 border-2 inline-block w-[250px]">
              <option value="Dr.MAni" className='p-2'>Dr.Mani</option>
              <option value="Dr.Selvam" className='p-2' >Dr.Selvam</option>
            </select><br />
            <label htmlFor="dept" className="bg-green-300 p-3 m-5 rounded-md gap-3 w-[240px] inline-block pl-5" >Department Name:</label>
            <select name="Dept" id="dept" className=" m-3 p-2 border-2 w-2xl w-[210px] inline-block pl-5 max-w-[250px]">
              <option value="" className='p-2 '>Teeth Checkup</option>
              <option value="" className='p-2'>Body Checkup</option>
            </select>
            <label htmlFor="phone" className="bg-green-300 p-3 m- rounded-md gap-3 w-[240px] inline-block pl-5">Phone Number</label>
            <input type="number" placeholder='XXXXXXXX' className=" m-5 p-2 border-2 w-2xl inline-block w-[220px]" /><br />
            <label htmlFor="symptoms" className="bg-green-300 p-3 m-5 rounded-md gap-3 w-[240px] inline-block pl-5">Symptoms</label>
            <input type="text" className=" m-5 p-2 border-2" />
            <label htmlFor="date" className="bg-green-300 p-3 m-5 rounded-md gap-3 w-[240px] inline-block pl-5">Choose Date:</label>
            <input type="date" value="2024-12-03" className=" m-5 p-2 border-2"  /><br />

            <button className="mt-4 bg-black text-white p-3 w-[100px] rounded-lg justify-center translate-x-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Details;
