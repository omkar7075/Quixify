import { useEffect, useState } from 'react';
import axios from 'axios';
import './Notifications.css';

const Notifications = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/notifications/user/${userId}`);
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [userId]);

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.map((notification, index) => (
        <p key={index}>{notification.message}</p>
      ))}
    </div>
  );
};

export default Notifications;
