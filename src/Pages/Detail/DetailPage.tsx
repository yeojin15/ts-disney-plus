import { useParams } from 'react-router-dom';
import {
  DetailImg,
  DetailInfo,
  DetailOverview,
  DetailTitle,
  DetailWrap,
  InfoBox,
} from './DetailPage.style';
import { useEffect, useState } from 'react';
import { MovieProps } from '../../Util/interface';
import { baseURL, requestApi } from '../../Util/api';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import MovieList from '../../Components/Movie/MovieList';
// import { useDispatch, useSelector } from 'react-redux';
// import { likeSlice, setMovieLike } from '../../Store/likeSlice';

const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieProps | null>(null);
  const [sameGenre, setSameGenre] = useState<MovieProps[] | null>(null);
  // const dispatch = useDispatch();

  const getMovieDetail = async () => {
    try {
      const res = await requestApi.get(`/movie/${movieId}`);
      setMovie(res.data);
      // dispatch(
      //   setMovieLike({
      //     id: res.data.id,
      //     like: true,
      //   })
      // );
    } catch (error) {
      console.log(error);
    }
  };

  const getSameGenre = async () => {
    try {
      const res = await requestApi.get(`/movie/${movieId}/similar`);
      setSameGenre(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetail();
    getSameGenre();
  }, [movieId]);

  return (
    <DetailWrap key={movieId}>
      <DetailImg
        src={
          movie?.backdrop_path
            ? baseURL + movie.backdrop_path
            : movie?.poster_path
            ? baseURL + movie.poster_path
            : '/images/noimage.png'
        }
        alt={movie?.name}
      />
      <DetailInfo>
        <DetailTitle>
          <h2>
            {movie?.title ||
              movie?.name ||
              movie?.original_title ||
              movie?.original_name}
          </h2>
          <InfoBox>
            <p>평점 : {movie?.vote_average?.toFixed(1)}</p>
            <p
              className='btn-like'
              // onClick={() => setIsLike(!isLike)}
            >
              <AiOutlineHeart size={28} />
              {/* <AiFillHeart size={28} /> */}
            </p>
          </InfoBox>
        </DetailTitle>
        <DetailOverview>
          {movie?.overview ? movie.overview : '등록정보가 없습니다.'}
        </DetailOverview>
        <h3>비슷한 장르 더보기</h3>
        <MovieList
          movie={movie}
          sameGenre={sameGenre}
          $padding={[0, 0, 0, 0]}
        />
      </DetailInfo>
    </DetailWrap>
  );
};

export default DetailPage;
