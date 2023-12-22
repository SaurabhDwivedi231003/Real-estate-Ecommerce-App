import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800 animate__animated animate__fadeIn'>
        Welcome to <Link to='/' className="text-slate-500"> Saurabh Estate </Link> - Your Trusted Partner in Real Estate Excellence!
      </h1>

      <p className='mb-10 text-slate-700 animate__animated animate__fadeIn animate__delay-1s'>
        At Saurabh Estate, we stand as a premier real estate agency committed to guiding
        you through the seamless journey of buying, selling, or renting properties in
        the most sought-after neighborhoods. Our team of seasoned agents is devoted to
        delivering unparalleled service, ensuring that your real estate transactions are
        not only successful but also enjoyable. Our Mission:
        <br />
        Empowering our clients to achieve their real estate aspirations is at the core
        of our mission. We strive to provide expert advice, personalized service, and an
        in-depth understanding of the local market dynamics. Whether you're eager to
        find your dream home, sell a property, or secure a rental, our mission is to be
        your unwavering support throughout the entire process.
      </p>

      <div className='mb-10 text-slate-700 animate__animated animate__fadeIn animate__delay-2s'>
        <h2 className='text-3xl font-bold mb-4 text-slate-800'>Why Saurabh Estate?</h2>

        <p className='mb-4 text-black-700 font-bold'>
          Experience and Expertise:
        </p>
        <p>
          Our team comprises professionals with a wealth of
          experience and extensive knowledge in the real estate industry. You can trust us
          to navigate the complexities of the market with precision.
        </p>

        <p className='mb-4 text-black-700 font-bold'>
          Personalized Service:
        </p>
        <p>
          We recognize that each client is unique, with individual
          needs and aspirations. Our commitment to personalized service ensures that your
          real estate journey is tailored to match your specific requirements.
        </p>

        <p className='mb-4 text-black-700 font-bold'>
          Excitement and Rewards:
        </p>
        <p>
          Buying or selling a property should be an exciting and
          rewarding experience. At Saurabh Estate, we dedicate ourselves to turning this
          vision into reality for each and every client, making your real estate endeavors
          not just successful but thoroughly enjoyable.
        </p>
      </div>

      <p className='animate__animated animate__fadeIn animate__delay-3s'>
        Join us at Saurabh Estate, where excellence meets experience, and let's embark
        on your real estate journey together. Your dream property is just a step away!
      </p>

      {/* Social Media and Developer Info */}
      <div className='mt-8 flex flex-wrap'>
        <a
          href='https://www.linkedin.com/in/saurabh-dwivedi-ab701b234'
          target='_blank'
          rel='noopener noreferrer'
          className='flex-shrink-0 w-full sm:w-auto border border-red-800 bg-slate-500 text-white p-3 rounded hover:bg-slate-400 transition duration-300 mb-2 sm:mr-2'
        >
          LinkedIn
        </a>
        <a
          href='https://instagram.com/saurabh.dwivedi_23?igshid=NzZlODBkYWE4Ng=='
          target='_blank'
          rel='noopener noreferrer'
          className='flex-shrink-0 w-full sm:w-auto border border-red-800 bg-slate-500 text-white p-3 rounded hover:bg-slate-400 transition duration-300 mb-2 sm:mr-2'
        >
          Instagram
        </a>
        <a
          href='https://github.com/Saurabhdwivedi231003'
          target='_blank'
          rel='noopener noreferrer'
          className='flex-shrink-0 w-full sm:w-auto border border-red-800 bg-slate-500 text-white p-3 rounded hover:bg-slate-400 transition duration-300 mb-2 sm:mr-2'
        >
          Github
        </a>
        <a
          href='https://twitter.com/saurabh_dwi_?t=ffFUPzKYTN9c1CdZ8nx44A&s=09'
          target='_blank'
          rel='noopener noreferrer'
          className='flex-shrink-0 w-full sm:w-auto border border-red-800 bg-slate-500 text-white p-3 rounded hover:bg-slate-400 transition duration-300 mb-2 sm:mr-2'
        >
          Twitter
        </a>
      </div>

      <p className='mt-4 text-gray-600'>
        Developed by Saurabh Dwivedi
      </p>
    </div>
  );
};

export default About;
