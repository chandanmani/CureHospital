import React from 'react'
import Doctor from './Doctor';

const NewDoctor = () => {
    const doctors = [
        { img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d", name: 'Dr. Mani ' },
        { img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7", name: 'Dr. Selvam' }
      ];
  return (
    
<>
<h1 className="text-center text-4xl font-bold mt-8 pl-2">Doctors</h1>
      <div className="flex flex-wrap ml-[80px]">
      {doctors.map((doctor, index) => (
    <div key={index} className="w-1/2 p-2">
      <Doctor img={doctor.img} name={doctor.name} />
    </div>
        ))}

      </div>



</>
  )
}

export default NewDoctor

