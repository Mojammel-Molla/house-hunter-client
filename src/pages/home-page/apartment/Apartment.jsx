import { Link } from 'react-router-dom';

const Apartment = ({ apartment }) => {
  const {
    _id,
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
            Available till:{' '}
            <span className="font-semibold">{availabilityDate}</span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/apartment/${_id}`}>
            <button className="btn bg-blue-600 text-white hover:bg-blue-900">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
