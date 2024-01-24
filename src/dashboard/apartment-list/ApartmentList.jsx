import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import SectionTitle from '../../hooks/SectionTitle';

const ApartmentList = () => {
  const [allApartments, setAllApartments] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios.get('/all-apartments').then(res => {
      setAllApartments(res.data);
      console.log(res.data);
    });
  }, [axios]);
  return (
    <>
      <SectionTitle title="Apartment List"></SectionTitle>
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
            {allApartments.map((apartment, index) => (
              <tr key={apartment._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={apartment.picture} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{apartment.name}</div>
                      <div className="text-sm opacity-50">{apartment.city}</div>
                    </div>
                  </div>
                </td>
                <td>{apartment.availabilityDate}</td>
                <td>${apartment.rentPerMonth}</td>
                <th>
                  <button className="btn btn-ghost btn-md text-red-600">
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

export default ApartmentList;
