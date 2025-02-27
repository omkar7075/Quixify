import { useEffect, useState } from 'react';
import Popular from '../PopularSellers/Popular';
import Notifications from './Notifications';
import FooterSection from '../FooterSection/FooterSection';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './ServiceProvider.css';

function ServiceProvider() {
  const location = useLocation();
  const { selectedItem, city, landmark, address } = location.state || {};
  const [nearbyProviders, setNearbyProviders] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [providerId, setProviderId] = useState(null);

  useEffect(() => {
    const fetchNearbyProviders = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await axios.get('http://localhost:4000/api/v1/providers/nearby', {
            params: { latitude, longitude, maxDistance: 10000 },
          });

          setNearbyProviders(response.data);
          const acceptedProviders = response.data.filter((provider) => provider.hasAcceptedRequest);
          setNotifications(acceptedProviders.map((provider) => `${provider.name} has accepted your request.`));
        } catch (error) {
          console.error('Error fetching providers:', error);
        }
      });
    };

    fetchNearbyProviders();
  }, []);

  useEffect(() => {
    const fetchProviderId = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/providers/me');
        setProviderId(response.data._id);
      } catch (error) {
        console.error('Error fetching provider ID:', error);
      }
    };

    fetchProviderId();
  }, []);

  return (
    <>
      <div className="header">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> | <Link to="/CleaningHelp">Cleaning Help</Link> |{' '}
          <Link to="/Address">Address</Link> | <span>{selectedItem}</span>
        </nav>
        <h1>Sellers</h1>
      </div>

      {notifications.length > 0 && (
        <div className="notifications">
          {notifications.map((notification, index) => (
            <p key={index}>{notification}</p>
          ))}
        </div>
      )}

      {providerId && <Notifications providerId={providerId} />}
      <Popular Title="Nearby Service Providers" nearbyProviders={nearbyProviders} city={city} landmark={landmark} address={address} />
      <FooterSection />
    </>
  );
}

export default ServiceProvider;
