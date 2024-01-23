import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import Booking from './booking/Booking';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const axios = useAxios();
  useEffect(() => {
    axios.get(`/bookings?email=Motin@gmail.com`).then(res => {
      setBookings(res.data);
    });
  }, [axios]);
  console.log(bookings);
  return (
    <div className="w-11/12 mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {bookings.map(booking => (
        <Booking key={booking._id} booking={booking}></Booking>
      ))}
    </div>
  );
};

export default MyBookings;
