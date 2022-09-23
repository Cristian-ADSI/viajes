import { useState } from 'react';
import axiosInstance from '../services/axiosInstance';

const useGetHotels = (state = {}) => {
  const [hotels, setHotels] = useState(state);

  const getHotels = async search => {
    try {
      await axiosInstance
        .get(search)
        .then( resp => {
          const results = resp.data.data.body;
          resultRefactor(results);
        })
        .catch( err => console.warn(err));
    } catch (error) {
      console.warn(error);
    }
  };

  const resultRefactor = result => {
    const newResult = {
      header: result.header,
      totalCount: result.searchResults.totalCount,
      list: result.searchResults.results,
    };
    setHotels(newResult);
  };

  return [hotels, getHotels];
};

export default useGetHotels;
