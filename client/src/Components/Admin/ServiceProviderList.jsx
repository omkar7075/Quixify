import React, { useState } from 'react';

const ServiceProviders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const serviceProviders = [
    { name: 'Sanjay', serviceType: 'Cleaner Help', area: 'Waghodia', city: 'Vadodara', mobile: '9874562130', email: 'abc@gmail.com' },
    { name: 'Suresh', serviceType: 'Plumber Help', area: 'Greater Noida', city: 'Delhi', mobile: '9874562130', email: 'abc@gmail.com' },
    { name: 'Ajay', serviceType: 'Electrical Help', area: 'Bandra', city: 'Mumbai', mobile: '9874562130', email: 'abc@gmail.com' },
    { name: 'Sahil', serviceType: 'Salon Help', area: 'Vastrapur', city: 'Ahmedabad', mobile: '9874562130', email: 'abc@gmail.com' },
    { name: 'Shubham', serviceType: 'Outdoor Help', area: 'Gotri', city: 'Vadodara', mobile: '9874562130', email: 'abc@gmail.com' },
    { name: 'Sanjay', serviceType: 'Cleaner Help', area: 'Waghodia', city: 'Vadodara', mobile: '9874562130', email: 'abc@gmail.com' },
    { name: 'Suresh', serviceType: 'Plumber Help', area: 'Greater Noida', city: 'Delhi', mobile: '9874562130', email: 'abc@gmail.com' },
    { name: 'Ajay', serviceType: 'Electrical Help', area: 'Bandra', city: 'Mumbai', mobile: '9874562130', email: 'abc@gmail.com' },
    { name: 'Sahil', serviceType: 'Salon Help', area: 'Vastrapur', city: 'Ahmedabad', mobile: '9874562130', email: 'abc@gmail.com' },
    { name: 'Shubham', serviceType: 'Outdoor Help', area: 'Gotri', city: 'Vadodara', mobile: '9874562130', email: 'abc@gmail.com' },
    { name: 'Suresh', serviceType: 'Plumber Help', area: 'Greater Noida', city: 'Delhi', mobile: '9874562130', email: 'abc@gmail.com' },
    { name: 'Ajay', serviceType: 'Electrical Help', area: 'Bandra', city: 'Mumbai', mobile: '9874562130', email: 'abc@gmail.com' },
    { name: 'Sahil', serviceType: 'Salon Help', area: 'Vastrapur', city: 'Ahmedabad', mobile: '9874562130', email: 'abc@gmail.com' },
    { name: 'Shubham', serviceType: 'Outdoor Help', area: 'Gotri', city: 'Vadodara', mobile: '9874562130', email: 'abc@gmail.com' },
    // Add more entries as needed
  ];

  const itemsPerPage = 10;
  const filteredProviders = serviceProviders.filter(provider =>
    (selectedCity === '' || provider.city === selectedCity) &&
    (selectedCategory === '' || provider.serviceType === selectedCategory) &&
    (provider.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredProviders.length / itemsPerPage);
  const displayedProviders = filteredProviders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="serviceProviderList mt-20 md:w-11/12 w-11/12 sm:m-10 mx-auto lg:w-8/12 lg:ml-[320px] xl:w-9/12 ml:w-96" id="serviceProviderList">
      <h1 className="text-center font-bold sm:text-4xl text-2xl text-shadow-md">Service Providers</h1>
      <hr className="w-[80%] mx-auto my-6 border-black"/>
      <div className="filters grid sm:grid-cols-3 grid-cols-2 sm:gap-2 gap-2 justify-around w-full sm:w-1/2 mb-5">
        <select onChange={handleCityChange} value={selectedCity} className="p-2 border rounded-md">
          <option value="">City</option>
          <option value="Vadodara">Vadodara</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Ahmedabad">Ahmedabad</option>
          {/* Add more cities as needed */}
        </select>
        <input 
          type="text" 
          placeholder="Search by Name" 
          className="sm:p-2 p-1 border rounded-md" 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)} 
        />
        <select onChange={handleCategoryChange} value={selectedCategory} className="p-2 border rounded-md">
          <option value="">Service Categories</option>
          <option value="Cleaner Help">Cleaner Help</option>
          <option value="Plumber Help">Plumber Help</option>
          <option value="Electrical Help">Electrical Help</option>
          <option value="Salon Help">Salon Help</option>
          <option value="Outdoor Help">Outdoor Help</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className=" w-full overflow-x-scroll scroll-smooth scrollbar-hide">
        <table className="min-w-full border-collapse border border-black rounded-xl">
          <thead>
            <tr>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Name</th>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Service Type</th>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Area</th>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">City</th>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Mobile No.</th>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Mail ID</th>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Delete</th>
            </tr>
          </thead>
          <tbody>
            {displayedProviders.map((provider, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="border border-black sm:p-2 p-1 sm:text-base text-sm">{provider.name}</td>
                <td className="border border-black sm:p-2 p-1 sm:text-base text-sm">{provider.serviceType}</td>
                <td className="border border-black sm:p-2 p-1 sm:text-base text-sm">{provider.area}</td>
                <td className="border border-black sm:p-2 p-1 sm:text-base text-sm">{provider.city}</td>
                <td className="border border-black sm:p-2 p-1 sm:text-base text-sm">{provider.mobile}</td>
                <td className="border border-black sm:p-2 p-1 sm:text-base text-sm">{provider.email}</td>
                <td className="border border-black sm:p-2 p-1 sm:text-base text-sm text-center">
                  <button onClick={() => console.log('Delete', provider)} className="text-red-500">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination flex justify-end mt-4">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map(page => (
          <button 
            key={page + 1} 
            onClick={() => setCurrentPage(page + 1)} 
            className={`mx-1 px-3 py-1 border rounded ${currentPage === page + 1 ? 'bg-blue-500 text-white' : ''}`}
          >
            {page + 1}
          </button>
        ))}
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
          disabled={currentPage === totalPages}
          className="mx-1 px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ServiceProviders;
