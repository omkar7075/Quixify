import React, { useState, useEffect } from 'react';
import cleaner from '../../assets/cleaner.png';
import cleaner1 from '../../assets/cleaner1.png';
import cleaner2 from '../../assets/cleaner2.png';
import cleaner3 from '../../assets/cleaner3.png';
import cleaner4 from '../../assets/cleaner4.png';

const ServiceCategories = () => {
  const initialCategories = [
    {
      serviceName: 'Cleaner Help',
      subCategories1: 'Full Home Clean',
      subCategories1Icon: cleaner1,
      subCategories2: 'Kitchen & Bathroom Clean',
      subCategories2Icon: cleaner2,
      subCategories3: 'Bedroom clean',
      subCategories3Icon: cleaner3,
      subCategories4: 'Appliance Clean',
      subCategories4Icon: cleaner4,
      description: "Revitalize your living or working space. Meticulously clean and refresh interiors, appliances, and various surfaces for a pristine environment.",
      colourCode: '#F9DB9B',
      icon: cleaner,
    },
    // Add more entries as needed
  ];

  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : initialCategories;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const handleAddService = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <div className="mt-20 sm:w-11/12 sm:m-10 mx-auto lg:w-8/12 lg:ml-[320px] xl:w-9/12  w-11/12" id="serviceList">
      <h1 className="text-center font-bold sm:text-4xl text-2xl text-shadow-md">
        Service Categories
        <button className="ml-4 sm:p-2 p-1 bg-blue-500 text-white sm:text-lg text-base rounded-md float-end" onClick={() => setIsModalOpen(true)}>Add Service</button>
      </h1>
      <hr className="w-4/5 my-4 mx-auto"/>
      <div className=" w-full overflow-x-scroll scroll-smooth scrollbar-hide">
        <table className="min-w-full border-collapse border border-black rounded-xl">
          <thead>
            <tr>
              <th className="border border-black sm:p-2 p-1 bg-gray-200 sm:text-lg text-sm">Service Name</th>
              <th className="border border-black sm:p-2 p-1 bg-gray-200 sm:text-lg text-sm">Sub Categories 1</th>
              <th className="border border-black sm:p-2 p-1 bg-gray-200 sm:text-lg text-sm">Sub Categories 2</th>
              <th className="border border-black sm:p-2 p-1 bg-gray-200 sm:text-lg text-sm">Sub Categories 3</th>
              <th className="border border-black sm:p-2 p-1 bg-gray-200 sm:text-lg text-sm">Sub Categories 4</th>
              <th className="border border-black sm:p-2 p-1 bg-gray-200 sm:text-lg text-sm">Description</th>
              <th className="border border-black sm:p-2 p-1 bg-gray-200 sm:text-lg text-sm">Colour Code</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="border border-black sm:p-2 p-1">
                  <div className="flex flex-col items-center sm:text-base text-sm">
                    {category.icon && <img src={category.icon} alt="icon" className="inline-block w-5 h-5 mr-2"/>}
                    {category.serviceName}
                  </div>
                </td>
                <td className="border border-black sm:p-2 p-1">
                  <div className="flex flex-col items-center sm:text-base text-sm">
                    {category.subCategories1Icon && <img src={category.subCategories1Icon} alt="icon" className="inline-block w-5 h-5 mr-2"/>}
                    {category.subCategories1}
                  </div>
                </td>
                <td className="border border-black sm:p-2 p-1">
                  <div className="flex flex-col items-center sm:text-base text-sm">
                    {category.subCategories2Icon && <img src={category.subCategories2Icon} alt="icon" className="inline-block w-5 h-5 mr-2"/>}
                    {category.subCategories2}
                  </div>
                </td>
                <td className="border border-black sm:p-2 p-1">
                  <div className="flex flex-col items-center sm:text-base text-sm">
                    {category.subCategories3Icon && <img src={category.subCategories3Icon} alt="icon" className="inline-block w-5 h-5 mr-2"/>}
                    {category.subCategories3}
                  </div>
                </td>
                <td className="border border-black sm:p-2 p-1">
                  <div className="flex flex-col items-center sm:text-base text-sm">
                    {category.subCategories4Icon && <img src={category.subCategories4Icon} alt="icon" className="inline-block w-5 h-5 mr-2"/>}
                    {category.subCategories4}
                  </div>
                </td>
                <td className="border border-black sm:p-2 p-1 sm:text-base text-sm">{category.description}</td>
                <td className="border border-black sm:p-2 p-1 text-center">
                  <div
                    className="w-5 h-5 rounded-full mx-auto"
                    style={{
                      backgroundColor: category.colourCode,
                    }}
                  ></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <AddServiceModal
          closeModal={() => setIsModalOpen(false)}
          addService={handleAddService}
        />
      )}
    </div>
  );
};

const AddServiceModal = ({ closeModal, addService }) => {
  const [formData, setFormData] = useState({
    serviceName: '',
    subCategories1: '',
    subCategories1Icon: null,
    subCategories2: '',
    subCategories2Icon: null,
    subCategories3: '',
    subCategories3Icon: null,
    subCategories4: '',
    subCategories4Icon: null,
    description: '',
    colourCode: '#000000',
    icon: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addService(formData);
    closeModal();
  };

  return (
    <div className=" w-11/12 mx-auto fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl md:w-9/12 h-3/4 lg:w-7/12 xl:4/12 overflow-auto">
        <h2 className="text-2xl font-bold mb-4 text-center ">Add New Service</h2>
        <hr className="mb-4"/>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block flex">
            Service Name:
            <input
              type="text"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              className="block w-full sm:p-2 p-1 border border-gray-300 rounded mt-1"
              required
            />
            <input
              type="file"
              name="icon"
              accept="image/*"
              onChange={handleChange}
              className="block w-full mt-1"
              required
            />
          </label>
          <label className="block flex">
            Sub Categories 1:
            <input
              type="text"
              name="subCategories1"
              value={formData.subCategories1}
              onChange={handleChange}
              className="block w-full sm:p-2 p-1 border border-gray-300 rounded mt-1"
              required
            />
            <input
              type="file"
              name="subCategories1Icon"
              accept="image/*"
              onChange={handleChange}
              className="block w-full mt-1"
              required
            />
          </label>
          <label className="block flex">
            Sub Categories 2:
            <input
              type="text"
              name="subCategories2"
              value={formData.subCategories2}
              onChange={handleChange}
              className="block w-full sm:p-2 p-1 border border-gray-300 rounded mt-1"
              required
            />
            <input
              type="file"
              name="subCategories2Icon"
              accept="image/*"
              onChange={handleChange}
              className="block w-full mt-1"
              required
            />
          </label>
          <label className="block flex">
            Sub Categories 3:
            <input
              type="text"
              name="subCategories3"
              value={formData.subCategories3}
              onChange={handleChange}
              className="block w-full sm:p-2 p-1 border border-gray-300 rounded mt-1"
              required
            />
            <input
              type="file"
              name="subCategories3Icon"
              accept="image/*"
              onChange={handleChange}
              className="block w-full mt-1"
              required
            />
          </label>
          <label className="block flex">
            Sub Categories 4:
            <input
              type="text"
              name="subCategories4"
              value={formData.subCategories4}
              onChange={handleChange}
              className="block w-full sm:p-2 p-1 border border-gray-300 rounded mt-1"
              required
            />
            <input
              type="file"
              name="subCategories4Icon"
              accept="image/*"
              onChange={handleChange}
              className="block w-full mt-1"
              required
            />
          </label>
          <label className="block flex">
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="block w-full sm:p-2 p-1 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="block flex">
            Colour Code:
            <input
              type="color"
              name="colourCode"
              value={formData.colourCode}
              onChange={handleChange}
              className="block w-full sm:p-2 p-1 mt-1"
              required
            />
          </label>
          <div className="flex justify-end space-x-4 mt-4">
            <button type="button" onClick={closeModal} className="sm:p-2 p-1 border border-black rounded">Cancel</button>
            <button type="submit" className="sm:p-2 p-1 bg-blue-500 text-white rounded border border-black">Add Service</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceCategories;
