import { Dispatch, SetStateAction, useRef } from 'react';
import {
  ModalClose,
  ModalBox,
  ModalWrap,
  ModalContent,
  ModalImage,
  ModalText,
  ModalTitle,
  ModalInfo,
} from './Movie.style';
import { FaTimes } from 'react-icons/fa';
import { MovieProps } from '../../Util/interface';
import { baseURL } from '../../Util/api';
import useClickOutside from '../../Hooks/useClickOutside';

type MovieModalProps = MovieProps & {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};
const MovieModal: React.FC<MovieModalProps> = ({
  id,
  title,
  original_title,
  name,
  original_name,
  genre_ids,
  overview,
  backdrop_path,
  media_type,
  popularity,
  release_date,
  first_air_date,
  vote_average,
  video,
  videos,
  setModalOpen,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setModalOpen(false));

  console.log(genre_ids, ':::');
  return (
    <ModalWrap>
      <ModalBox ref={ref}>
        <ModalClose onClick={() => setModalOpen(false)}>
          <FaTimes size={20} />
        </ModalClose>
        <ModalContent>
          <ModalImage>
            <img src={baseURL + backdrop_path} alt={title} />
          </ModalImage>
          <ModalText>
            <ModalTitle>
              <p>
                공개일 : {release_date || first_air_date}{' '}
                &nbsp;&nbsp;-&nbsp;&nbsp;
                <span>평점 : {vote_average?.toFixed(2)}</span>
              </p>
              <h2>{title || original_title || name || original_name}</h2>
            </ModalTitle>
            <ModalInfo>
              {overview ? overview : '등록 정보가 없습니다'}
            </ModalInfo>
          </ModalText>
        </ModalContent>
      </ModalBox>
    </ModalWrap>
  );
};

export default MovieModal;
