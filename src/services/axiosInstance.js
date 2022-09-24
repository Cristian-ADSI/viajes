import axios from 'axios';
export default axios.create({
  
  baseURL: 'https://hotels4.p.rapidapi.com/properties/list',
  headers:{
    'X-RapidAPI-Key':'b56e35da8fmsh56186a78d39a523p1278c1jsn729bea1ab23b',
    'X-RapidAPI-Host':'hotels4.p.rapidapi.com',
  }
});
