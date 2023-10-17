import { baseURL } from '../../Util/api';
import { MovieProps } from '../../Util/interface';
import { MovieTitle, MovieWrap } from './Movieitem.style';
import MovieModal from './MovieModal';
import useModal from '../../Hooks/useModal';

interface SearchedMovie {
  movie: MovieProps;
}
const MovieItem = ({ movie }: SearchedMovie) => {
  const { modalOpen, setModalOpen, selectedMovie, clickedMovie } =
    useModal();

  return (
    <>
      <MovieWrap onClick={() => clickedMovie(movie)}>
        <img
          src={
            movie.backdrop_path
              ? baseURL + movie.backdrop_path
              : movie.poster_path
              ? baseURL + movie.poster_path
              : '/images/noimage.png'
          }
          alt={movie.title}
        />
        <MovieTitle>
          <p>
            {movie.title ||
              movie.name ||
              movie.original_title ||
              movie.original_name}
          </p>
        </MovieTitle>
      </MovieWrap>
      {modalOpen && selectedMovie && (
        <MovieModal setModalOpen={setModalOpen} {...selectedMovie} />
      )}
    </>
  );
};

export default MovieItem;
