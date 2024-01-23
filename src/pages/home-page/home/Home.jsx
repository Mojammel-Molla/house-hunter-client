import { useEffect, useState } from 'react';
import AllApartments from '../all-apartments/AllApartments';
import Banner from '../banner/Banner';
import useAxios from '../../../hooks/useAxios';

const Home = () => {
  const [allApartments, setAllApartments] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios.get('/all-apartments').then(res => {
      setAllApartments(res.data);
      console.log(res.data);
    });
  }, [axios]);

  const handlesSearch = e => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
    const searchValue = allApartments.filter(apartment =>
      apartment.name.toLowerCase().includes(search.toLowerCase())
    );

    setAllApartments(searchValue);
  };
  return (
    <div>
      <Banner handleSearch={handlesSearch}></Banner>
      <AllApartments allApartments={allApartments}></AllApartments>
    </div>
  );
};

export default Home;
