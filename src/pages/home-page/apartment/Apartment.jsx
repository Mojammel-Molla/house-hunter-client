const Apartment = ({ apartment }) => {
  const {
    name,
    address,
    city,
    bedrooms,
    bathrooms,
    roomSize,
    picture,
    availaiblityDate,
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
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
