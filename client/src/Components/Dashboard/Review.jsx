// install this in terminal:
// npm install react react-dom @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

import React from 'react';
import Testimonial from './Testimonial';
import Sebastian from '../../assets/Sebastian.png';
// import './Dashboard.css'

function Review() {
  const testimonials = [
    {
      name: 'Sebastian',
      image: {Sebastian},
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text.",
      rating: 5,
    },
    {
      name: 'Evangeline',
      image: '/Image/Evangeline.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text.",
      rating: 5,
    },
    {
      name: 'Alexander',
      image: '/Image/Alexander.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text.",
      rating: 5,
    },
    // Repeat or add more testimonials as needed
  ];
  
  return (
    // <div id="mt-20 sm:w-11/12 w-11/12 mx-auto  m-10 lg:w-8/12 xl:ml-[340px] lg:ml-[320px] xl:w-9/12 ml:w-96">
    <div className="content mt-20 sm:w-11/12 w-11/12 mx-auto m-10 lg:w-8/12 xl:ml-[340px] lg:ml-[320px] xl:w-9/12 ml:w-96 ">
      <div className=" text-center font-bold sm:text-4xl text-2xl drop-shadow">Reviews</div>
      <hr />
      <div id="testimonial-items" className=' flex flex-wrap pb-12'>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default Review