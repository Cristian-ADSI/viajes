import { Fragment } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import Card from '../components/card/Card';
import Header from '../components/header/Header';

import './Search.scss';
import { validateParams } from '../utilities/validateFunctions';

const Search = () => {
  const { search } = useLocation();
  let params = new URLSearchParams(search);
  let param = null;

  const isAllParamas = validateParams(params);

  return (
    <Fragment>
      <Header />
      <main>
        <section className="results">
          {isAllParamas ? (
            <Card />
          ) : (
            <h2 className='error'>Oops! Ocurrio un error inesperperado</h2>
          )}
        </section>
      </main>
    </Fragment>
  );
};

export default Search;
