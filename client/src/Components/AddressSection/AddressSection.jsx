import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddressSection({ onClose, Title }) {
    const navigate = useNavigate();
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedLandmark, setSelectedLandmark] = useState('');
    const [fullAddress, setFullAddress] = useState('');

    const cities = ['Vadodara', 'Ahmedabad', 'Delhi', 'Mumbai'];
    const landmarks = {
        Vadodara: ['Akota', 'AlkaPuri', 'Gotri', 'Manjalpur', 'Waghodia'],
        Ahmedabad: ['Mandir Road', 'Vastrapur', 'Maninagar'],
        Delhi: ['Connaught Place', 'Chandni Chowk', 'Greater Noida'],
        Mumbai: ['Bandra', 'Nariman Point', 'Marine Drive'],
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        setSelectedLandmark('');
    };

    const handleLandmarkChange = (event) => {
        setSelectedLandmark(event.target.value);
    };

    const handleFullAddressChange = (event) => {
        setFullAddress(event.target.value);
    };

    const handleBack = () => {
        onClose();
    };

    const handleNext = () => {
        navigate('/Serviceprovider', {
            state: {
                selectedItem: Title,
                city: selectedCity,
                landmark: selectedLandmark,
                address: fullAddress
            }
        });
    };

    const availableLandmarks = selectedCity ? landmarks[selectedCity] : [];

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
            <div className="items-center p-5 rounded-3xl sm:h-96 h-[65%] shadow-2xl bg-slate-50 shadow-black flex xl:w-7/12 lg:w-9/12 sm:w-10/12 w-11/12 flex-col">
                <br />
                <h1 className='text-black text-center self-center font-bold sm:text-4xl text-3xl textShadow'>Address Section</h1>
                <br />
                <form className='flex flex-col w-full justify-evenly my-3 mx-auto'>
                    <div className='flex flex-col sm:flex-row'>
                    <div className="w-full h-1/4 sm:mb-3 mb-5">
                        <select className='h-10 w-4/5 rounded-xl border-2 border-solid' value={selectedCity} onChange={handleCityChange}>
                            <option className="block mb-1 font-bold" value="">Select Your City</option>
                            {cities.map((city) => (
                                <option className="block mb-1 font-bold" key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="w-full h-1/4 mb-3">
                        <select className='h-10 w-4/5 rounded-xl border-2 border-solid' value={selectedLandmark} onChange={handleLandmarkChange} disabled={!selectedCity}>
                            <option className="block mb-1 font-bold" value="">Select Landmark Area</option>
                            {availableLandmarks.map((landmark) => (
                                <option className="block mb-1 font-bold" key={landmark} value={landmark}>
                                    {landmark}
                                </option>
                            ))}
                        </select>
                    </div>
                    </div>
                     <div className="w-full h-[60%] ">
                    <textarea 
                        className='p-3 h-full border-2 border-solid rounded-xl w-11/12 resize-none'
                        placeholder="Enter your full address" 
                        value={fullAddress} 
                        onChange={handleFullAddressChange} 
                    />
                </div>
                </form>
               
                <div className="flex w-full justify-between mt-5">
                    <button className="py-3 sm:px-[15%] border border-solid rounded-xl cursor-pointer w-2/6 text-white m-auto buttonGradient" onClick={handleBack}>Back</button>
                    <button className="py-3 sm:px-[15%] border border-solid rounded-xl cursor-pointer w-2/6 text-white m-auto buttonGradient" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default AddressSection;
