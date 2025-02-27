import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import { Link, useLocation } from 'react-router-dom';
import FooterSection from '../FooterSection/FooterSection';

const Schedule = () => {
  const location = useLocation();
  const { service, city, landmark, address } = location.state || {};

  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const generateNextFiveDays = () => {
      const days = [];
      for (let i = 0; i < 5; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        days.push({ date, formattedDate: date.toLocaleDateString('en-US', options) });
      }
      return days;
    };

    setDates(generateNextFiveDays());
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const generateTimeSlots = () => {
        const slots = [];
        const currentTime = new Date();
        currentTime.setMinutes(0, 0, 0); // Round to the nearest hour
        const startHour = 10;
        const endHour = 18;
        for (let hour = startHour; hour < endHour; hour += 2) {
          const slot = new Date(selectedDate);
          slot.setHours(hour);
          slot.setMinutes(0, 0, 0);
          if (slot > new Date()) {
            const endSlot = new Date(slot);
            endSlot.setHours(slot.getHours() + 2);
            const options = { hour: '2-digit', minute: '2-digit', hour12: true };
            slots.push(`${slot.toLocaleTimeString('en-US', options)}-${endSlot.toLocaleTimeString('en-US', options)}`);
          }
        }
        return slots;
      };
      setTimeSlots(generateTimeSlots());
    }
  }, [selectedDate]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset the selected time when the date changes
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <>
      <Pagination page="Date & Time" />
      <div className="mx-auto w-11/12 sm:w-11/12 lg:w-10/12 xl:w-9/12 p-5 mb-10 bg-white rounded-lg shadow-xl shadow-zinc-900">
        <h2 className="sm:text-2xl text-xl font-bold mb-4">Available on {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <div className="flex flex-wrap gap-3 mb-6">
          {dates.map(({ date, formattedDate }, index) => (
            <button
              key={index}
              className={`px-4 py-2 border rounded ${selectedDate && selectedDate.getTime() === date.getTime() ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handleDateClick(date)}
            >
              {formattedDate}
            </button>
          ))}
        </div>
        {selectedDate && (
          <>
            <h2 className="text-xl font-bold mb-4">Available schedule on {selectedDate.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded ${selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => handleTimeClick(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </>
        )}
        <div className="flex justify-between">
          <Link to="/Service" state={{ service, city, landmark, address }}>
            <button type="button" className="buttonGradient sm:text-lg sm:p-3 text-base p-2 rounded-md">Previous</button>
          </Link>
          <Link to="/Information" state={{ service, city, landmark, address, selectedDate, selectedTime }}>
            <button type="submit" className="buttonGradient sm:text-lg sm:py-3 sm:px-6 px-6 py-2 text-base rounded-md">Next</button>
          </Link>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Schedule;
