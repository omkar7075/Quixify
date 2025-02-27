import React, { useState } from "react";
import Card from "./Card";
import Reno from "../../assets/Reno.jpg";
import Ele from "../../assets/Ele.jpg";
import Beu from "../../assets/Beu.jpg";
import Hair from "../../assets/Hair.jpg";
import Moving from "../../assets/Moving.jpg";
import Arrow from "../../assets/Arrow.svg";
import Abeu from "../../assets/Abeu.jpg";
import Aclean from "../../assets/Aclean.jpg";
import Plumb from "../../assets/Plumb.jpg";
import Rati from "../../assets/Rati.png"; // Default image for nearby providers
import "../PopularSellers/Popular.css";

const Popular = ({ onShowAll, showOnlyPopular, Title, city, landmark, address, nearbyProviders = [] }) => {
  const [showAll, setShowAll] = useState(false);

  // Static service providers data
  const staticServiceProviders = [
    { image: Reno, service: "All Painting And Renovation Services", rating: "4.5", price: "1000" },
    { image: Abeu, service: "All Types Kind Of Beauty Services", rating: "4.5", price: "1000" },
    { image: Plumb, service: "All Types Of Plumbing Services", rating: "4.5", price: "1000" },
    { image: Hair, service: "All Hair Cut And Hair Color Services", rating: "4.5", price: "1000" },
    { image: Aclean, service: "All Kind Of Cleaning Services", rating: "4.5", price: "1000" },
    { image: Ele, service: "All Emergency Electrical Support", rating: "4.5", price: "1000" },
    { image: Moving, service: "All Moving And Shifting Services", rating: "4.5", price: "1000" },
    { image: Beu, service: "All Kind Of Beauty Services", rating: "4.5", price: "1000" },
  ];

  // Combine static and nearby providers
  const allProviders = [
    ...staticServiceProviders,
    ...nearbyProviders.map((provider) => ({
      image: Rati, // Use a default image or fetch from provider data
      service: provider.services ? provider.services.join(", ") : "Unknown Service",
      rating: provider.rating || "4.5", // Default or fetched rating
      price: provider.price || "1000", // Default or fetched price
      distance: provider.distance ? `${provider.distance} km` : "N/A", // Display distance
      name: provider.name, // Store provider name
    })),
  ];

  const handleClick = () => {
    setShowAll(!showAll);
    if (!showAll && typeof onShowAll === "function") {
      onShowAll();
    }
  };

  const providersToShow = showAll ? allProviders : allProviders.slice(0, 8);

  return (
    <div className={`w-11/12 mx-auto ${showOnlyPopular ? "popular-only" : ""}`}>
      <h1 className="sm:text-4xl text-2xl font-bold mb-6">{Title}</h1>
      <div className="grid grid-cols-2 w-11/12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-16 sm:px-4 gap-5 mx-auto">
        {providersToShow.map((provider, index) => (
          <Card
            key={index}
            image={provider.image}
            service={provider.service}
            rating={provider.rating}
            price={provider.price}
            distance={provider.distance}
            city={city}
            landmark={landmark}
            address={address}
          />
        ))}
      </div>
      <div className="flex justify-end items-center mt-6 pr-4 sm:mb-0 mb-5">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
        <img className="ml-2 h-8" src={Arrow} alt="Arrow" />
      </div>
    </div>
  );
};

export default Popular;
