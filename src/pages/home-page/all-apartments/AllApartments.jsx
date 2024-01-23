import { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import Apartment from '../apartment/Apartment';
import SectionTitle from '../../../hooks/SectionTitle';

const AllApartments = ({ allApartments }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <SectionTitle title="All Apartments"></SectionTitle>
      <div className="grid gap-5 w-11/12 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-10 ">
        {show
          ? allApartments?.map(apartment => (
              <Apartment key={apartment._id} apartment={apartment}></Apartment>
            ))
          : allApartments
              ?.slice(0, 10)
              .map(apartment => (
                <Apartment
                  key={apartment._id}
                  apartment={apartment}
                ></Apartment>
              ))}
      </div>
      <div className="text-center my-4">
        <button
          onClick={() => setShow(!show)}
          className=" btn bg-blue-600 text-white hover:bg-blue-900"
        >
          Show All
        </button>
      </div>
    </>
  );
};

export default AllApartments;
