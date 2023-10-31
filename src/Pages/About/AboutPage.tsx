import { useEffect, useState } from 'react';
import {
  AboutWrap,
  BookmarkWrap,
  Bookmarks,
  Profile,
} from './About.style';
import { IoIosArrowDown } from 'react-icons/io';
import requests from '../../Util/requests';
import { MovieProps } from '../../Util/interface';
import { requestApi } from '../../Util/api';
import MovieItem from '../../Components/Movie/MovieItem';

const AboutPage = () => {
  // 유저 리스트 보여주고 추가할수있도록(가족계정) 최대 8개? 6개?
  const [profile, setProfile] = useState(null);
  const [movies, setMovies] = useState<MovieProps[] | null>(null);

  const requestLikedMovie = async () => {
    try {
      const res = await requestApi.get(requests.requestMovieNowPlaying);
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movies, '::::');

  useEffect(() => {
    requestLikedMovie();
  }, []);

  return (
    <AboutWrap>
      <Profile>
        <div className='profile-img'>
          {profile !== null ? (
            <img src='' alt='user' />
          ) : (
            <div className='img' />
          )}
        </div>
        <h2>Yeojin</h2>
      </Profile>
      <BookmarkWrap>
        <h2>북마크한 영화</h2>
        sort 용 컨트롤러!
        <Bookmarks>
          {movies && movies.length !== 0
            ? movies?.map((movie, idx) => {
                return <MovieItem movie={movie} key={idx} />;
              })
            : '북마크한 영화가 없어요'}
        </Bookmarks>
      </BookmarkWrap>
    </AboutWrap>
  );
};

export default AboutPage;
