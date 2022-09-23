import React, { Fragment } from 'react';
import Card from '../components/card/Card';
import Header from '../components/header/Header';

import './Search.scss';

const Search = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <section className="results">
          <Card />
        </section>
      </main>
    </Fragment>
  );
};

export default Search;
