import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import SectionTitle from '../../hooks/SectionTitle';

const BookingRequests = () => {
  const [allBookings, setAllBookings] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios.get('/all-bookings').then(res => {
      setAllBookings(res.data);
      console.log(res.data);
    });
  }, [axios]);
  return (
    <>
      <SectionTitle title="Booking List"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No:</th>
              <th>Name</th>
              <th>Available Date</th>
              <th>Rent</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allBookings.map((booking, index) => (
              <tr key={booking._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={booking.picture} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking.name}</div>
                      <div className="text-sm opacity-50">{booking.city}</div>
                    </div>
                  </div>
                </td>
                <td>{booking.email}</td>
                <td>${booking.rentPerMonth}</td>
                <th>
                  <button className="btn text-red-600 btn-ghost btn-md">
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookingRequests;
