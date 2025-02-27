import React from 'react';

const AdminOrderSummary = () => {
  return (
    <div className="mt-20 sm:w-11/12 w-11/12 mx-auto m-10 lg:w-8/12 xl:ml-[340px] lg:ml-[320px] xl:w-9/12 ml:w-96" id="order">
      <div className="text-center font-bold sm:text-4xl text-2xl text-shadow-md">Order Summary</div>
      <hr className="w-4/5 my-4 mx-auto"/>
      <div className="border-3 border-black rounded-xl w-full mt-4 sm:-ml-0">
        <table className="w-full border-collapse rounded-xl">
          <thead>
            <tr>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Order Id</th>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Customer Name</th>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Status</th>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Service Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59310</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Sanjay</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-green-500">Active</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59293</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Manoj</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-yellow-500">Pending</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59272</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Ajay</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-yellow-500">Pending</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59235</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Aman</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-blue-500">Completed</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59219</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Sankar</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-red-500">Cancelled</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59310</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Sanjay</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-green-500">Active</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59293</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Manoj</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-yellow-500">Pending</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59272</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Ajay</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-yellow-500">Pending</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59235</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Aman</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-blue-500">Completed</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">59219</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1">Sankar</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-red-500">Cancelled</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOrderSummary;
