import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import './Dashboard.css'
function Testimonial({ name, image, description, rating }) {
  return (
    <div className=" mt-20 m-10 ">
    {/* <div className=" mt-20 md:w-11/12 m-10 lg:w-8/12 lg:ml-[340px] xl:w-9/12 ml:w-96"> */}
    <img className=" relative border-2 w-60 border-solid rounded[50%]" src={image} alt={name} />
    <div className=" w-60 h-max bg-white border-2 border-solid rounded-xl">
      <div className="flex items-center justify-between name-rating">
        <div className="name-position">
          <p className=" my-5 font-medium text-lg ">{name}</p>
        </div>
        <div className=" text-lg font-medium my-5">
          {Array.from({ length: rating }).map((_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} style={{ color: '#FFD43B' }} />
          ))}
        </div>
      </div>
      <p className=" px-5 text-center">{description}</p>
    </div>
  </div>
  )
}

export default Testimonial