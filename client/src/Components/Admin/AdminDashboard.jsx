import React from 'react';
import ActiveOrder from '../../assets/ActiveOrder.png';
import PendingOrder from '../../assets/PendingOrder.png';
import CompletedOrder from '../../assets/CompletedOrder.png';
import TotalOrder from '../../assets/TotalOrder.png';

const AdminDashboard = () => {
  return (
    <div className="mt-24 sm:w-11/12 m-10 xl:ml-[340px] lg:ml-[320px] lg:w-8/12 xl:w-9/12 w-11/12  mx-auto" id="admin-dashboard">
      {/* Main content */}
      <div className="text-center font-bold sm:text-4xl text-2xl text-shadow-md">Admin Dashboard</div>
      <hr className="w-4/5 my-4 mx-auto"/>

      <div className="grid sm:grid-cols-4 grid-cols-2 sm:ml-0 xl:gap-1 lg:gap-5 xl:ml-11">
        {/* Dashboard cards */}
        <div className="sm:w-40 sm:h-32 w-32 h-32 xl:w-[210px] border border-black rounded-2xl flex flex-col items-center justify-center mb-2 bg-[#adffb0]">
          <img className="sm:w-8 sm:h-8 w-6 h-6 mt-2" src={ActiveOrder} alt="Active Order" />
          <div className="mt-2 sm:text-lg text-base font-semibold">Active Order</div>
          <div className="sm:text-lg text-base font-semibold">2</div>
        </div>
        <div className="sm:w-40 sm:h-32 w-32 h-32 xl:w-[210px] border border-black rounded-2xl flex flex-col items-center justify-center mb-2 bg-[#ffcfad]">
          <img className="sm:w-8 sm:h-8 w-6 h-6 mt-2" src={PendingOrder} alt="Pending Order" />
          <div className="mt-2 sm:text-lg text-base font-semibold">Order Pending</div>
          <div className="sm:text-lg text-base font-semibold">3</div>
        </div>
        <div className="sm:w-40 sm:h-32 w-32 h-32 xl:w-[210px] border border-black rounded-2xl flex flex-col items-center justify-center mb-2 bg-[#c8f0ff]">
          <img className="sm:w-8 sm:h-8 w-6 h-6 mt-2" src={CompletedOrder} alt="Completed Order" />
          <div className="mt-2 sm:text-lg text-base font-semibold">Order Completed</div>
          <div className="sm:text-lg text-base font-semibold">35</div>
        </div>
        <div className="sm:w-40 sm:h-32 w-32 h-32 xl:w-[210px] border border-black rounded-2xl flex flex-col items-center justify-center mb-2 bg-[#d6c9ff]">
          <img className="sm:w-8 sm:h-8 w-6 h-6 mt-2" src={TotalOrder} alt="Total Order" />
          <div className="mt-2 sm:text-lg text-base font-semibold">Total Order</div>
          <div className="sm:text-lg text-base font-semibold">40</div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-between my-8 sm:mr-5 lg:mx-auto">
        {/* Order Summary */}
        <div className="border-3 border-black rounded-xl w-full sm:w-[48%]">
          <table className="w-full border-collapse rounded-xl">
            <caption className="text-center font-bold text-lg my-2">Order summary</caption>
            <thead>
              <tr>
                <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Order Id</th>
                <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Customer Name</th>
                <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows */}
              <tr className="even:bg-gray-100">
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59310</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Sanjay</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center text-green-500">Active</td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59293</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Manoj</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center text-yellow-500">Pending</td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59272</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Ajay</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center text-yellow-500">Pending</td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59235</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Aman</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center text-blue-500">Completed</td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59219</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Sankar</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center text-blue-500">Completed</td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59272</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Ajay</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center text-yellow-500">Pending</td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59310</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Sanjay</td>
                <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center text-green-500">Active</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Month Summary */}
        <div className="border-3 border-black rounded-xl w-full sm:w-2/4 mt-8 sm:mt-0 sm:ml-2">
          <div className="text-center font-bold text-lg my-2">Month Summary</div>
          <hr className="w-4/5 my-4 mx-auto"/>
          <div className="grid grid-cols-2 gap-7">
            <div className="sm:w-40 sm:h-32 w-32 h-32 xl:w-[210px] border border-black rounded-2xl flex flex-col items-center justify-center mb-2 bg-[#adffb0]">
              <img className="sm:w-8 sm:h-8 w-6 h-6 mt-2" src={ActiveOrder} alt="Active Order" />
              <div className="mt-2 sm:text-lg text-base font-semibold">Active Order</div>
              <div className="sm:text-lg text-base font-semibold">2</div>
            </div>
            <div className="sm:w-40 sm:h-32 w-32 h-32 xl:w-[210px] border border-black rounded-2xl flex flex-col items-center justify-center mb-2 bg-[#ffcfad]">
              <img className="sm:w-8 sm:h-8 w-6 h-6 mt-2" src={PendingOrder} alt="Pending Order" />
              <div className="mt-2 sm:text-lg text-base font-semibold">Order Pending</div>
              <div className="sm:text-lg text-base font-semibold">3</div>
            </div>
            <div className="sm:w-40 sm:h-32 w-32 h-32 xl:w-[210px] border border-black rounded-2xl flex flex-col items-center justify-center mb-2 bg-[#c8f0ff]">
              <img className="sm:w-8 sm:h-8 w-6 h-6 mt-2" src={CompletedOrder} alt="Completed Order" />
              <div className="mt-2 sm:text-lg text-base font-semibold">Order Completed</div>
              <div className="sm:text-lg text-base font-semibold">35</div>
            </div>
            <div className="sm:w-40 sm:h-32 w-32 h-32 xl:w-[210px] border border-black rounded-2xl flex flex-col items-center justify-center mb-2 bg-[#d6c9ff]">
              <img className="sm:w-8 sm:h-8 w-6 h-6 mt-2" src={TotalOrder} alt="Total Order" />
              <div className="mt-2 sm:text-lg text-base font-semibold">Total Order</div>
              <div className="sm:text-lg text-base font-semibold">40</div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue */}
      <div className="border-3 border-black rounded-xl w-full">
        <div className="text-center font-bold text-lg my-2">Revenue</div>
        <hr className="w-4/5 my-4 mx-auto"/>
        <div className="flex justify-evenly items-center mb-5">
          <div className="text-center">
            <div className="font-bold text-lg">Pending Order</div>
            <div className="text-lg">$0</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg">Total Order</div>
            <div className="text-lg">$4,000</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg">Revenue</div>
            <div className="text-lg">$400</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
