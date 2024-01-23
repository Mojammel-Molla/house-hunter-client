import { useLoaderData } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';

const ApartmentDetail = () => {
  const apartment = useLoaderData();
  const axios = useAxios();
  const {
    name,
    address,
    city,
    bedrooms,
    bathrooms,
    roomSize,
    picture,
    availabilityDate,
    rentPerMonth,
    phoneNumber,
    description,
  } = apartment || {};

  const booking = {
    name: name,
    address: address,
    city: city,
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    roomSize: roomSize,
    picture: picture,
    availabilityDate: availabilityDate,
    rentPerMonth: rentPerMonth,
    Phone: phoneNumber,
    description: description,
    email: 'Motin@gmail.com',
  };
  const handleBooking = () => {
    axios.post('/bookings', booking).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        alert('Booking successfully');
      }
    });
  };

  return (
    <div className="w-full">
      <div className="card lg:w-1/2 mx-auto lg:card-side bg-base-100 shadow-xl my-10">
        <figure>
          <img className="md:w-96 md:h-96" src={picture} alt="Apartment" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <div className="flex justify-between">
            <p>
              City : <span className="font-semibold">{city}</span>
            </p>
            <p>
              Address : <span className="font-semibold">{address}</span>
            </p>
          </div>
          <div className="flex justify-between">
            <p>
              Bedroom : <span className="font-semibold">{bedrooms}</span>
            </p>
            <p>
              Bathroom: <span className="font-semibold">{bathrooms}</span>
            </p>
          </div>
          <div className="flex justify-between">
            <p>
              Room size : <span className="font-semibold">{roomSize}</span>
            </p>
            <p>
              Available Till:
              <span className="font-semibold">{availabilityDate}</span>
            </p>
          </div>
          <div className="flex justify-between">
            <p>
              Rent : <span className="font-semibold">${rentPerMonth}</span>
            </p>
            <p>
              Phone :<span className="font-semibold">{phoneNumber}</span>
            </p>
          </div>
          <p>
            Description: <span className="">{description}</span>
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={handleBooking}
              className="btn bg-blue-600 text-white hover:bg-blue-900"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetail;
