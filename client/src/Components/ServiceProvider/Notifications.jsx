import { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = ({ providerId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/providers/${providerId}/notifications`);
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [providerId]);

  const handleRespond = async (notificationId, status) => {
    try {
      await axios.put('http://localhost:4000/api/v1/providers/notifications/respond', {
        providerId,
        notificationId,
        status,
      });
      setNotifications((prev) =>
        prev.map((n) => (n._id === notificationId ? { ...n, status } : n))
      );
    } catch (error) {
      console.error('Error responding to notification:', error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <div key={notification._id} className="mb-4 p-4 bg-white rounded-lg shadow-sm">
            <p className="text-gray-700">{notification.message}</p>
            <p className="text-gray-600">Status: {notification.status}</p>
            {notification.status === 'pending' && (
              <div className="mt-2">
                <button
                  onClick={() => handleRespond(notification._id, 'accepted')}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleRespond(notification._id, 'rejected')}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No notifications found.</p>
      )}
    </div>
  );
};

export default Notifications;