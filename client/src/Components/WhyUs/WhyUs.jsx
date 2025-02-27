// WhyUs.js

import React from "react";
import WhyCard from '../WhyUs/WhyCard'
import ServiceCommitment from '../../assets/ServiceCommitment.png'
import UserDataSecure from  '../../assets/UserDataSecure.png'
import ExcellenceExperience from  '../../assets/ExcellenceExperience.png'
import FastService from  '../../assets/FastService.png'
import SecurePayment from   '../../assets/SecurePayment.png'
import ServiceCare  from      '../../assets/ServiceCare.png'

const  WhyUs = () => {
    return (
        <div className="bg-[#D4D3FF] py-16">
            <div className='text-center mb-8'>
                <h1 className='sm:text-4xl text-3xl font-bold mb-4'>Why Our Marketplace?</h1>
                <p className='sm:text-lg text-base sm:w-7/12 w-10/12 mx-auto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="grid grid-cols-2 w-11/12 lg:w-10/12 sm:w-9/12 xl:w-8/12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm:px-4 mx-auto">
                <WhyCard design={{background:'#F3F3FF'}}
                         image={ServiceCommitment}
                         title='Service Commitment'
                         description='It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader.' />

                <WhyCard design={{background:'#FBEDF3'}}
                         image={ExcellenceExperience}
                         title='Excellence Experience'
                         description='It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader.' />

                <WhyCard design={{background:'#EFF6FF'}}
                         image={UserDataSecure}
                         title='User Data Secure'
                         description='It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader.' />

                <WhyCard design={{background:'#FFF3EE'}}
                         image={FastService}
                         title='Fast Service'
                         description='It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader.' />

                <WhyCard design={{background:'#E5FFF8'}}
                         image={SecurePayment}
                         title='Secure Payment'
                         description='It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader.' />

                <WhyCard design={{background:'#F5E7FD'}}
                         image={ServiceCare}
                         title='Service Care'
                         description='It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader.' />
            </div>
        </div>
    )
}

export default WhyUs;
