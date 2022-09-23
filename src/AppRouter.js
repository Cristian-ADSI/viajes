import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';

const AppRouter = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/Hotel-Search" element={<Search />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default AppRouter; 
