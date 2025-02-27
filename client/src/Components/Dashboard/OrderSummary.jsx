// // src/components/OrderSummary.js
// import React from 'react';
// // import './Dashboard.css';
// import videoCall from '../../assets/videoCall.png';
// import review from '../../assets/Review.png';

// const OrderSummary = () => {
//   return (
//     <div className="order" id="order">
//       <div className="header">Order Summary</div>
//       <hr />
//       <div className="orderSummary2">
//         <table>
//           <thead>
//             <tr>
//               <th>Order Id</th>
//               <th>Customer Name</th>
//               <th>Status</th>
//               <th>Service Type</th>
//               <th>Video Call/ Review</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>59310</td>
//               <td>Sanjay</td>
//               <td className="active">Active</td>
//               <td>Cleaning Service</td>
//               <td><img className="orderIcon" src="" alt="" /></td>
//             </tr>
//             <tr>
//               <td>59293</td>
//               <td>Manoj</td>
//               <td className="pending">Pending</td>
//               <td>Cleaning Service</td>
//               <td><img className="orderIcon" src={videoCall} alt="" /></td>
//             </tr>
//             <tr>
//               <td>59272</td>
//               <td>Ajay</td>
//               <td className="pending">Pending</td>
//               <td>Cleaning Service</td>
//               <td><img className="orderIcon" src={videoCall} alt="" /></td>
//             </tr>
//             <tr>
//               <td>59235</td>
//               <td>Aman</td>
//               <td className="completed">Completed</td>
//               <td>Cleaning Service</td>
//               <td><img className="orderIcon" src={review} alt="" /></td>
//             </tr>
//             <tr>
//               <td>59219</td>
//               <td>Sankar</td>
//               <td className="cancelled">Cancelled</td>
//               <td>Cleaning Service</td>
//               <td><img className="orderIcon" src="" alt="" /></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default OrderSummary;

// src/components/AdminOrderList.jsx

import React from 'react';
import Review from './Review';
import videoCall from '../../assets/videoCall.png';
import review from '../../assets/Review.png';

const OrderSummary = () => {
  return (
    <div className="mt-20 sm:w-11/12 w-11/12 mx-auto m-10 lg:w-8/12 xl:ml-[340px] lg:ml-[320px] xl:w-9/12 ml:w-96" id="order">
      <div className="text-center font-bold sm:text-4xl text-2xl text-shadow-md">Order Summary</div>
      <hr className="w-4/5 my-4 mx-auto"/>
      <div className="border-3 border-black rounded-xl w-full mt-4 sm:-ml-0  ">
        <table className="w-full border-collapse rounded-xl">
          <thead>
            <tr>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Order Id</th>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Customer Name</th>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Status</th>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Service Type</th>
              <th className="border border-black sm:p-2 p-1 sm:text-lg text-sm bg-gray-200">Video Call/ Review</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">59310</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">Sanjay</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1text-green-500">Active</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 "><img className="orderIcon" src="" alt="" /></td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">59293</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">Manoj</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-yellow-500">Pending</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 "><img className="orderIcon" src={videoCall} alt="" /></td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">59272</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">Ajay</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-yellow-500">Pending</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 "><img className="orderIcon" src={videoCall} alt="" /></td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">59235</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">Aman</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-blue-500">Completed</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 align-middle"><img className="orderIcon" src={review} alt="" /></td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">59219</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">Sankar</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-red-500">Cancelled</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 "><img className="orderIcon" src="" alt="" /></td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">59310</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">Sanjay</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-green-500">Active</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 "><img className="orderIcon" src="" alt="" /></td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">59293</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">Manoj</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-yellow-500">Pending</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 "><img className="orderIcon" src={videoCall} alt="" /></td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">59272</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">Ajay</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-yellow-500">Pending</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 "><img className="orderIcon" src={videoCall} alt="" /></td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">59235</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">Aman</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-blue-500">Completed</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 "><img className="orderIcon" src={review} alt="" /></td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">59219</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 ">Sankar</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-red-500">Cancelled</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 text-center">Cleaning Service</td>
              <td className="border border-black sm:text-base text-sm sm:p-2 p-1 "><img className="orderIcon" src="" alt="" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderSummary;
