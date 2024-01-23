import { Link } from 'react-router-dom';

const Booking = ({ booking }) => {
  const { name, city, picture, rentPerMonth } = booking || {};
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img className="h-60 w-96" src={picture} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div>
          <p>
            City: <span className="font-semibold">{city}</span>
          </p>
          <p>
            Rent: <span className="font-semibold">${rentPerMonth}</span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-blue-600 text-white hover:bg-blue-900">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
