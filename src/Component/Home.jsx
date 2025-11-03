import React, { useEffect } from 'react';
import { fetchData } from '../Component/Data/FetchData';

const Home = () => {

    const data = async () => {
        const result = await fetchData();
        console.log(result);
    };

    useEffect(() => {
        data();
    }, []);

  return (
    <div>Home</div>
  );
}

export default Home;