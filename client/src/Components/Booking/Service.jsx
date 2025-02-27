import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Pagination from './Pagination';
import Conformation from '../../assets/Confirmation.png';
import FooterSection from '../FooterSection/FooterSection';

export default function Service() {
  const location = useLocation();
  const { service, city, landmark, address } = location.state || {};
  const [services, setServices] = useState({
    bathroom: { selected: true, price: 250 },
    kitchen: { selected: true, price: 200 },
    appliances: { selected: true, price: 200 },
    sanitization: { selected: true, price: 300 },
  });

  const updateTotal = () => {
    let total = 0;
    for (let service in services) {
      if (services[service].selected) {
        total += services[service].price;
      }
    }
    return total;
  };

  const handleCheckboxChange = (service) => {
    setServices((prevServices) => ({
      ...prevServices,
      [service]: {
        ...prevServices[service],
        selected: !prevServices[service].selected,
      },
    }));
  };

  useEffect(() => {
    // Update total whenever services state changes
    updateTotal();
  }, [services]);

  return (
    <>
      <Pagination page='Service' />
      <div className=" mx-auto w-11/12 sm:w-11/12 lg:w-9/12 p-5 mb-10 bg-white rounded-lg shadow-xl shadow-zinc-900">
        <div className=" flex mb-6">
          <img src={Conformation} alt="Supriya" className="sm:w-1/3 sm:h-full h-48 w-4/12  rounded-lg" />
          <div className=" sm:ml-5 ml-3">
            <div className='service-name-rating flex items-center mb-3'>
              <h2 className="sm:text-2xl text-xl font-bold">Supriya</h2>
              <span className=" sm:text-xl text-lg ml-3">⭐ 4.9 (50)</span>
            </div>
            <p className="sm:text-base text-sm text-gray-700">
              Dedicated and experienced individual offering top-quality professional cleaning services in Waghodia and surrounding areas. Passionate about cleanliness, with keen attention to detail. Tailors services to meet each client's specific needs.
            </p>
          </div>
        </div>

        <div className=" mb-6">
          <h3 className="sm:text-xl text-lg font-bold mb-3">What's Included</h3>
          <div className=" flex justify-between items-center mb-3">
            <div className="flex items-center">
              <input type="checkbox" id="bathroom" checked={services.bathroom.selected} onChange={() => handleCheckboxChange('bathroom')} className="mr-2"/>
              <label htmlFor="bathroom" className="text-base">1 Bathroom Room</label>
            </div>
            <span>₹ 250</span>
            <a href="#" className="text-red-500 ml-3" onClick={() => handleCheckboxChange('bathroom')}>Remove</a>
          </div>
          <div className=" flex justify-between items-center mb-3">
            <div className="flex items-center">
              <input type="checkbox" id="kitchen" checked={services.kitchen.selected} onChange={() => handleCheckboxChange('kitchen')} className="mr-2"/>
              <label htmlFor="kitchen" className="text-base">1 Kitchen Room</label>
            </div>
            <span>₹ 200</span>
            <a href="#" className="text-red-500 ml-3" onClick={() => handleCheckboxChange('kitchen')}>Remove</a>
          </div>

          <h3 className="sm:text-xl text-lg font-bold mb-3">Upgrade your order with extras</h3>
          <div className=" flex justify-between items-center mb-3">
            <div className="flex items-center">
              <input type="checkbox" id="appliances" checked={services.appliances.selected} onChange={() => handleCheckboxChange('appliances')} className="mr-2"/>
              <label htmlFor="appliances" className="text-base">Appliances Cleaning</label>
            </div>
            <span>₹ 200</span>
          </div>
          <div className=" flex justify-between items-center mb-3">
            <div className="flex items-center">
              <input type="checkbox" id="sanitization" checked={services.sanitization.selected} onChange={() => handleCheckboxChange('sanitization')} className="mr-2"/>
              <label htmlFor="sanitization" className="text-base">Sanitization of Toilets</label>
            </div>
            <span>₹ 300</span>
          </div>
        </div>

        <div className=" mb-6">
          <h3 className="sm:text-xl text-lg font-bold mb-3">Benefits of the Package:</h3>
          <ul className="list-disc sm:ml-5 ml-2 text-base text-gray-700">
            <li className='mb-2'>Supriya brings extensive knowledge and experience to meet your needs effectively.</li>
            <li>Supriya is a trustworthy professional, providing peace of mind to clients entrusting their homes.</li>
          </ul>
        </div>

        <div className=" mb-6">
          <h3 className="sm:text-xl text-lg font-bold">Total: ₹ <span id="totalAmount">{updateTotal()}</span></h3>
        </div>

        <div className=" flex justify-between">
          <Link to='/Serviceprovider'>
            <button className=" buttonGradient sm:text-lg sm:p-3 text-base p-2 rounded-md">Previous</button>
          </Link>
          <Link to='/Schedule' state={{ service, city, landmark, address }}>
            <button className=" buttonGradient sm:text-lg sm:py-3 sm:px-6 px-6 py-2 text-base rounded-md">Next</button>
          </Link>
        </div>
      </div>
      <FooterSection/>
    </>
  )
}
