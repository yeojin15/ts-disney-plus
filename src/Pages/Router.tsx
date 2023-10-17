import { Route, Routes } from 'react-router-dom';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import MainPage from './Main/MainPage';
import SearchPage from './Search/SearchPage';
import DetailPage from './Detail/DetailPage';

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path=':movieId' element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
