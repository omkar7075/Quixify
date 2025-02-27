import React from "react";
import '../Seller_Invitation/Seller_InvitationCard.css'
import BecomeSeller from '../../assets/BecomeSeller.jpg'
import { Link } from "react-router-dom";

const Seller_InvitationCard = () =>{
    return (
        <div className="w-full h-5/6 mx-auto my-20 lg:w-10/12 sm:max-lg:w-11/12">
            <h2 className="text-center text-2xl sm:text-4xl sm:mx-52 mx-2 font-bold  md:max-lg:w-8/12 md:max-lg:mx-auto">Join us in shaping the future of household services!</h2>
            <div className="flex m-8 md:max-lg:flex-col lg:flex-row flex-col">
                <img src={BecomeSeller} alt='Become Seller' className="sm:w-6/12 sm:h-5/6 mx-auto w-11/12 h-5/6 md:max-lg:w-7/12"/>
                <div className="m-2.5 sm:text-xl text-lg  ml-5 sm:ml-8 font-semibold leading-5 sm:max-lg:w-11/12 sm:max-lg:mx-auto md:max-lg:mt-8">
                    <p className="sm:text-base text-sm">Elevate your business by joining our platform, where expertise meets opportunity. Connect with a diverse clientele and thrive in a community dedicated to your professional success</p>
                    <ul>
                        <li className="list-disc sm:ml-12 ml-4 mt-8 sm:text-base text-sm ">Connect with diverse clients seeking your expertise.</li>
                        <li className="list-disc sm:ml-12 ml-4 mt-8 sm:text-base text-sm ">Showcase skills with an intuitive, attention-grabbing platform.</li>
                    </ul>
                    <Link to='/PartnerSignUp/BasicInfo'><button type="button" className="bg-[#1DBAEB] border-none h-12 sm:w-36 w-28 sm:text-base text-sm rounded-2xl cursor-pointer text-white mt-10" >Become A Seller</button></Link>
                
                </div>
            
            </div>
        </div>

    )

}

export default Seller_InvitationCard