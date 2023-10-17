import { useState } from 'react';
import { MovieProps } from '../Util/interface';

/** 선택된 영화 모달 불러오기 */
const useModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieProps | null>(
    null
  );

  const clickedMovie = (movie: MovieProps) => {
    setModalOpen(true);
    setSelectedMovie(movie);
  };

  return { modalOpen, setModalOpen, selectedMovie, clickedMovie };
};

export default useModal;
