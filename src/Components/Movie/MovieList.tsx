import { useCallback, useEffect, useState } from 'react';
import { MovieListProps, MovieProps } from '../../Util/interface';
import { MovieListWrap, SlideBox } from './Movie.style';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { baseURL, requestApi } from '../../Util/api';
import MovieModal from './MovieModal';

const MovieList = ({ title, id, fetchUrl }: MovieListProps) => {
  const [movies, setMovies] = useState<MovieProps[] | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieProps | null>(
    null
  );

  /** 각 항목에 맞는 api 요청 함수 */
  const requestMovies = useCallback(async () => {
    try {
      const res = await requestApi.get(fetchUrl);
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }, [fetchUrl]);

  useEffect(() => {
    requestMovies();
  }, []);

  /** 클릭한 영화의 정보 state 에 담기 */
  const clickedMovie = (movie: MovieProps) => {
    setModalOpen(true);
    setSelectedMovie(movie);
  };

  return (
    <MovieListWrap>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        initialSlide={0}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1400: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          768: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          500: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}>
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <SlideBox onClick={() => clickedMovie(movie)}>
              <img src={baseURL + movie.backdrop_path} alt={movie.name} />
              <div>
                <p>
                  {movie.title ||
                    movie.name ||
                    movie.original_title ||
                    movie.original_name}
                </p>
              </div>
            </SlideBox>
          </SwiperSlide>
        ))}
      </Swiper>

      {modalOpen && selectedMovie && (
        <MovieModal setModalOpen={setModalOpen} {...selectedMovie} />
      )}
    </MovieListWrap>
  );
};

export default MovieList;
