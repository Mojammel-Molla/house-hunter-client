import SectionTitle from '../../hooks/SectionTitle';
import useAxios from '../../hooks/useAxios';

const AddApartment = () => {
  const axios = useAxios();

  const handleAddApartment = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const address = e.target.address.value;
    const city = e.target.city.value;
    const roomSize = e.target.roomSize.value;
    const bedroom = e.target.bedroom.value;
    const bathroom = e.target.bathroom.value;
    const picture = e.target.picture.value;
    const rent = e.target.rent.value;
    const availabilityDate = e.target.availabilityDate.value;
    const phone = e.target.phone.value;
    const description = e.target.description.value;
    const newApartment = {
      name,
      address,
      city,
      roomSize,
      bedroom,
      bathroom,
      picture,
      rent,
      availabilityDate,
      phone,
      description,
    };
    console.log(newApartment);

    axios.post('/new-apartment', newApartment).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        alert('New apartment added');
      }
    });
  };
  return (
    <div>
      <SectionTitle title="Add Apartment"></SectionTitle>
      <form onSubmit={handleAddApartment} className="card-body mx-auto w-2/4">
        <div className="flex gap-5 ">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="apartment name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Address:</span>
            </label>
            <input
              name="address"
              type="text"
              placeholder="address"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">City:</span>
            </label>
            <input
              name="city"
              type="text"
              placeholder="city"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Room Size:</span>
            </label>
            <input
              name="roomSize"
              type="text"
              placeholder="room size with sq. ft."
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Bedrooms:</span>
            </label>
            <input
              name="bedroom"
              type="number"
              placeholder="bedroom number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Bathrooms:</span>
            </label>
            <input
              name="bathroom"
              type="number"
              placeholder="bathroom number"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Picture:</span>
            </label>
            <input
              name="picture"
              type="text"
              placeholder="apartment picture"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Available Date:</span>
            </label>
            <input
              name="availabilityDate"
              type="date"
              placeholder="available date"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Rent:</span>
            </label>
            <input
              name="rent"
              type="text"
              placeholder="apartment rent"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text">Phone:</span>
            </label>
            <input
              name="phone"
              type="number"
              placeholder="phone number"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control w-4/4">
          <label className="label">
            <span className="label-text">Description:</span>
          </label>
          <input
            name="description"
            type="text"
            placeholder="Short description"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn bg-blue-600 text-white hover:bg-blue-900"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddApartment;
