import { Fragment } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getHotelDays, validateParams } from '../utilities/validateFunctions';

import Card from '../components/card/Card';
import Header from '../components/header/Header';
import useGetHotels from '../hooks/searchService';

import './Search.scss';

const Search = () => {
  const { search } = useLocation();

  let params = new URLSearchParams(search);

  const isAllParamas = validateParams(params);

  const hotelDays = getHotelDays(params);

  const [hotels, getHotels] = useGetHotels();

  useEffect(() => {
    getHotels(search);
  }, []);


  return (
    <Fragment>
      <Header />
      <main>
        <section className="results">
          <p className="total-count">
            {hotels.totalCount && hotels.totalCount + ' propiedades'}
          </p>
          <h2 className="destination-name">{hotels.header && hotels.header}</h2>
          {isAllParamas ? (
            hotels.list && hotels.list.map((hotel) => <Card hotel={hotel} hotelDays={hotelDays} key={hotel.id}/>)
          ) : (
            <h2 className="error">Oops! Ocurrio un error inesperperado</h2>
          )}
        </section>
      </main>
    </Fragment>
  );
};

export default Search;
