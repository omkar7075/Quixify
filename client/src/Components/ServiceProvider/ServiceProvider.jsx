import React, { useEffect, useState } from 'react';
import Popular from '../PopularSellers/Popular';
import Notifications from '../Notifications/Notifications';
//import Heatmap from '../Heatmap/Heatmap';
import FareCalculator from '../FareCalculator/FareCalculator';
import ProviderList from '../ProviderList/ProviderList';
import ServiceLog from '../ServiceLog/ServiceLog';
import ComplaintForm from '../ComplaintForm/ComplaintForm';
import './ServiceProvider.css';
import FooterSection from '../FooterSection/FooterSection';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

function Serviceprovider() {
  const location = useLocation();
  const { selectedItem, city, landmark, address } = location.state || {};
  const [nearbyProviders, setNearbyProviders] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [providerId, setProviderId] = useState(null); // Track the logged-in provider's ID

  useEffect(() => {
    const fetchNearbyProviders = async () => {
      try {
        // Get user's current location (latitude and longitude)
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;

          // Fetch nearby providers from the backend
          const response = await axios.get('http://localhost:4000/api/v1/providers/nearby', {
            params: {
              latitude,
              longitude,
              maxDistance: 10000, // Max distance in meters (10 km)
            },
          });

          setNearbyProviders(response.data);

          // Set notifications for accepted providers
          const acceptedProviders = response.data.filter((provider) => provider.hasAcceptedRequest);
          setNotifications(acceptedProviders.map((provider) => `${provider.name} has accepted your request.`));
        });
      } catch (error) {
        console.error('Error fetching nearby providers:', error);
      }
    };

    fetchNearbyProviders();
  }, []);

  // Simulate fetching the logged-in provider's ID (replace with actual authentication logic)
  useEffect(() => {
    const fetchProviderId = async () => {
      try {
        // Replace this with actual logic to fetch the logged-in provider's ID
        const response = await axios.get('http://localhost:4000/api/v1/providers/me');
        setProviderId(response.data._id);
      } catch (error) {
        console.error('Error fetching provider ID:', error);
      }
    };

    fetchProviderId();
  }, []);

  return (
    <>
      <div className="service-provider-container">
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>{' '}
          |{' '}
          <Link to="/CleaningHelp" className="breadcrumb-link">
            Cleaning Help
          </Link>{' '}
          |{' '}
          <Link to="/Address" className="breadcrumb-link">
            Address
          </Link>{' '}
          | <span className="breadcrumb-current">{selectedItem}</span>
        </nav>
        <h1 className="page-title">Sellers</h1>

        {/* Display Notifications */}
        {notifications.length > 0 && (
          <div className="notifications-container">
            {notifications.map((notification, index) => (
              <p key={index} className="notification-message">{notification}</p>
            ))}
          </div>
        )}

        {/* Display Notifications for Service Providers */}
        {providerId && <Notifications userId={providerId} />}

        {/* Display Nearby Providers */}
        <Popular
          Title="Nearby Service Providers"
          nearbyProviders={nearbyProviders}
          city={city}
          landmark={landmark}
          address={address}
        />

        {/* Heatmap Feature 
        <Heatmap />*/}

        {/* Dynamic Fare Calculation */}
        <FareCalculator />

        {/* User-Driven Provider Selection */}
        <ProviderList />

        {/* Service Transparency Log */}
        <ServiceLog providerId={providerId} serviceId="serviceIdHere" />

        {/* Grievance Redressal System */}
        <ComplaintForm userId="userIdHere" providerId={providerId} />

        <FooterSection />
      </div>
    </>
  );
}

export default Serviceprovider;