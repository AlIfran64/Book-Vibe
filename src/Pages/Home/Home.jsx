import { useLoaderData } from 'react-router';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { createContext } from 'react';


export const DataContext = createContext();

const Home = () => {

  // load data from routes
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <DataContext.Provider value={data}>
        <Books></Books>
      </DataContext.Provider>
    </div>
  );
};

export default Home;