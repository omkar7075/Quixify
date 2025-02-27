import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Popular from "../PopularSellers/Popular";
import Notifications from "../Notifications/Notifications";
import FooterSection from "../FooterSection/FooterSection";
import "./ServiceProvider.css";

function ServiceProvider() {
  const location = useLocation();
  const { selectedItem, city, landmark, address } = location.state || {};

  const [nearbyProviders, setNearbyProviders] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [providerId, setProviderId] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNearbyProviders = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await axios.get("http://localhost:4000/api/v1/providers/nearby", {
            params: { latitude, longitude, maxDistance: 10000 },
          });

          setNearbyProviders(response.data);
          const acceptedProviders = response.data.filter((provider) => provider.hasAcceptedRequest);
          setNotifications(acceptedProviders.map((provider) => `${provider.name} has accepted your request.`));
        } catch (error) {
          console.error("Error fetching providers:", error);
        }
      });
    };

    fetchNearbyProviders();
  }, []);

  const fetchProviderData = async () => {
    try {
      const token = localStorage.getItem("token");  // ✅ Ensure token is retrieved
  
      if (!token) {
        console.error("No token found, user is not authenticated.");
        setErrorMsg("User is not authenticated. Please log in.");
        return;
      }
  
      const response = await axios.get("http://localhost:4000/api/v1/providers/me", {
        headers: {
          Authorization: `Bearer ${token}`  // ✅ Ensure token is included
        },
        withCredentials: true,  // ✅ Ensure cookies are sent
      });
  
      console.log("Provider Data:", response.data);
      setProviderId(response.data.providerId);
    } catch (error) {
      console.error("Error fetching provider ID:", error);
      setErrorMsg("Failed to fetch provider data. Please log in again.");
    }
  };
  
  useEffect(() => {
    fetchProviderData();
  }, []);

  
  return (
    <>
      <div className="header">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> | <Link to="/CleaningHelp">Cleaning Help</Link> |{" "}
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

      {loading ? (
        <p>Loading provider data...</p>
      ) : errorMsg ? (
        <p style={{ color: "red" }}>Error: {errorMsg}</p>
      ) : (
        providerId && <Notifications providerId={providerId} />
      )}

      <Popular Title="Nearby Service Providers" nearbyProviders={nearbyProviders} city={city} landmark={landmark} address={address} />
      <FooterSection />
    </>
  );
}

export default ServiceProvider;