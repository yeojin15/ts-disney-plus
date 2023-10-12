import Banner from '../Components/Banner/Banner';
import Category from '../Components/Category/Category';
import MovieList from '../Components/Movie/MovieList';
import requests from '../Util/requests';

const MainPage = () => {
  return (
    <>
      <Banner />
      <Category />
      <MovieList
        title='Trending Now Movie'
        id='TNM'
        fetchUrl={requests.requestTrending}
      />
      <MovieList
        title='Top Rated Movie'
        id='TRM'
        fetchUrl={requests.requestMovieTopRated}
      />
      <MovieList
        title='On Air Series'
        id='OA'
        fetchUrl={requests.reqeustTvNowPlaying}
      />
      <MovieList
        title='Top Rated Series'
        id='TRS'
        fetchUrl={requests.requestTvTopRated}
      />
    </>
  );
};

export default MainPage;
