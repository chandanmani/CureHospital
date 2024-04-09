import React from 'react';
import TreatmentBox from './TreatmentBox';
import { FaTeeth,FaFirstAid } from 'react-icons/fa';
import { BiInjection } from 'react-icons/bi';

const Treatment = () => {
  const treatmentData = [
    {
      header: "Teeth Checkup",
      url: <FaTeeth />,
      description: "Regular teeth checkups are crucial for maintaining oral health. Dentists thoroughly examine teeth, gums, and mouth for decay or gum disease. X-rays may be taken for a closer look. Professional cleaning removes"
    },
    {
      header: "Body Checkup",
      url: <FaFirstAid/>,
      description: "Regular body checkups are vital for overall health maintenance. Medical professionals conduct thorough examinations to assess various aspects of health, including vital signs, blood tests, and physical evaluations. "
    },
    {
      header: "Vaccinations and Immunizations:",
      url: <BiInjection/>,
      description: "Injections are commonly employed to administer vaccines, which help prevent infectious diseases by stimulating the body's immune response. Vaccination programs are crucial for public health initiatives and disease prevention."
    }
  ];

  return (
    <div className="flex flex-wrap gap-10 ml-20 mb-[20px]">
      {/* Map through the treatmentData array and render TreatmentBox for each item */}
      {treatmentData.map((item, index) => (
        <TreatmentBox key={index} header={item.header} url={item.url} descripte={item.description} />
      ))}
    </div>
  );
};

export default Treatment;
