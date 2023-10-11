import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Header from '../Components/Common/Header';

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </>
  );
};

export default Router;
