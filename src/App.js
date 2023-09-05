import React from 'react';
import Home from './home';
import Singlemovie from './Singlemovie';
import Error from './Error';
import {Routes, Route } from "react-router-dom";
import Movies from './Movies';
import Login from './login';
import Seat from './MovieSeats';

const App = () => {
  return<>
  
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/Movies" element={<Movies />}> </Route>
      <Route path="/login" element={<Login />}> </Route>
      <Route path="/MovieSeats" element={<Seat />}> </Route>
      <Route path="movie/:id" element={<Singlemovie />}> </Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
   
  </>
}  

export default App