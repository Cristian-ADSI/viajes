import { Fragment } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { validateParams } from '../utilities/validateFunctions';

import Card from '../components/card/Card';
import Header from '../components/header/Header';
import useGetHotels from '../hooks/searchService';

import './Search.scss';

const Search = () => {
  const { search } = useLocation();
  let params = new URLSearchParams(search);

  const isAllParamas = validateParams(params);

  const [hotels, getHotels] = useGetHotels();

  useEffect(() => {
    getHotels(search);
  }, []);

  useEffect(() => {
    // console.log(hotels.list);
  }, [hotels]);

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
            hotels.list && hotels.list.map((hotel) => <Card />)
          ) : (
            <h2 className="error">Oops! Ocurrio un error inesperperado</h2>
          )}
        </section>
      </main>
    </Fragment>
  );
};

export default Search;
