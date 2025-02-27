// WhyCard.js

import React from "react";
import '../WhyUs/WhyCard.css';

const  WhyCard = ({image, title, description, design}) => {
    return (
        <div style={design} className={`sm:w-64 sm:h-48 w-[95%] rounded-3xl border-4 border-transparent flex flex-col items-center justify-center`}>
            <img src={image} alt="" className='rounded-full sm:w-16 sm:h-16 w-14 h-14 sm:mb-4' />
            <h2 className='sm:text-xl text-base text-center  font-bold mb-2'>{title}</h2>
            <p className='sm:text-sm text-xs text-center sm:pb-2 pb-5'>{description}</p>
        </div>
    )
}

export default WhyCard;
