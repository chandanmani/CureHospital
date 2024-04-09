import React from 'react';

const Footer = () => {
  return (
    <footer className='flex bg-green-500 p-5' >
      <div className='flex'>
        <h1 className='mt-5 font-extrabold' >CureWorld Hospital</h1>
        <nav>
          <ul className='mx-5'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Treatment</a></li>
          </ul>
        </nav>
      </div>
      <div className='mx-5' >
        <h2>Contact Us</h2>
        <p>India, Mumbai</p>
        <p>Phone: +123 456 789</p>
        <p>Email: info@cureworldhospital.com</p>
      </div>
      <div>
        <h2>Follow Us</h2>
    </div>
       
    </footer>
  );
}

export default Footer;
