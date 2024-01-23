import { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import Apartment from '../apartment/Apartment';

const AllApartments = ({ allApartments }) => {
  // const [allApartments, setAllApartments] = useState([]);
  // const axios = useAxios();

  // useEffect(() => {
  //   axios.get('/all-apartments').then(res => {
  //     setAllApartments(res.data);
  //     console.log(res.data);
  //   });
  // }, [axios]);
  return (
    <div className="grid gap-5 w-11/12 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-10 ">
      {allApartments.slice(0, 10).map(apartment => (
        <Apartment key={apartment._id} apartment={apartment}></Apartment>
      ))}
    </div>
  );
};

export default AllApartments;
