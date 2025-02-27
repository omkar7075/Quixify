import React from "react";
import '../FooterSection/FooterSectionCard.css'
import PlayStoreLogo from '../../assets/PlayStoreLogo.png'
import AppStoreLogo  from '../../assets/AppStoreLogo.png'
import LogoFoot from '../../assets/LogoFoot.png'
const FooterSectionCard =()=>{
    return (
        <div>
            <div className="flex flex-wrap sm:flex-nowrap justify-around items-center text-center text-white py-14 md:max-lg:mx-11 mx-5">
                <div className=" text-left sm:w-4/12 w-11/12 flex flex-col items-center ">
                    <h3 className=" my-2 text-xl">Download Our App</h3>
                    <p className="my-4 ">Download App for Android and ios Mobile Phone.</p>
                    <div className="flex sm:max-lg:flex-col lg:flex-row flex-row items-center">
                        <img className=' mr-4 sm:max-lg:mr-0 sm:max-lg:w-44 lg:w-44 w-36' src={PlayStoreLogo} alt="Play Store "/>
                        <img className='sm:ml-2 sm:max-lg:ml-0 sm:max-lg:mt-5 lg:mt-0 sm:max-lg:w-44 lg:w-44 w-40 ml-1' src={AppStoreLogo} alt="App Store "/>
                    </div>
                </div>
                <div className="flex flex-col items-center sm:ml-11 sm:mt-0 mt-7">
                    <img src={LogoFoot} alt="Logo" className="w-40 h-14 my-3 " />
                    <p className="my-3">Your Trusted Hub for Household Excellence.</p>
                </div>
                <div className="flex">
                    <div className=" mr-3 md:max-lg:ml-2">
                        <h3 className=" font-bold text-2xl ">Useful Links</h3>
                        <a className="block m-3">About Us</a>
                        <a className="block m-3">Services</a>
                        <a className="block m-3">FAQs</a>
                        <a className="block m-3">Blog</a>
                        <a className="block m-3">Careers</a>
                    </div>
                    <div className="ml-3">
                        <h3 className=" font-bold text-2xl">Follow Us</h3>
                        <a className="block m-3">Facebook</a>
                        <a className="block m-3">Twitter</a>
                        <a className="block m-3">Instagram</a>
                        <a className="block m-3">YouTube</a>
                    </div>
                
                </div>
            </div>  
            <div className="flex flex-col items-center text-center">
                <hr className=" w-11/12"></hr>
                <h2 className="text-white text-center mt-2 mb-7">Copyright 2024 - Quixify</h2>
            </div> 
        </div>   
    )
}

export default FooterSectionCard