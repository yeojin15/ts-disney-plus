import { Dispatch, SetStateAction, useRef, useState } from 'react';
import {
  ModalClose,
  ModalBox,
  ModalWrap,
  ModalContent,
  ModalImage,
  ModalText,
  ModalTitle,
  ModalInfo,
  ModalTitleBox,
} from './Movie.style';
import { FaTimes } from 'react-icons/fa';
import { MovieProps } from '../../Util/interface';
import { baseURL } from '../../Util/api';
import useClickOutside from '../../Hooks/useClickOutside';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Common/UI';

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
  poster_path,
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

  const navigate = useNavigate();
  const [isLike, setIsLike] = useState<boolean>(false);

  console.log(':::genre_ids:::', genre_ids);
  return (
    <ModalWrap>
      <ModalBox ref={ref}>
        <ModalClose onClick={() => setModalOpen(false)}>
          <FaTimes size={20} />
        </ModalClose>
        <ModalContent>
          <ModalImage>
            <img
              src={
                backdrop_path
                  ? baseURL + backdrop_path
                  : poster_path
                  ? baseURL + poster_path
                  : '/images/noimage.png'
              }
              alt={title}
            />
          </ModalImage>
          <ModalText>
            <ModalTitle>
              <ModalTitleBox>
                <div>
                  공개일 : {release_date || first_air_date}
                  <span>-</span>
                  <span>평점 : {vote_average?.toFixed(1)}</span>
                </div>
                <div>
                  <p
                    className='btn-like'
                    onClick={() => setIsLike(!isLike)}>
                    {isLike ? (
                      <AiFillHeart size={30} />
                    ) : (
                      <AiOutlineHeart size={30} />
                    )}
                  </p>
                  <Button
                    onClick={() => {
                      navigate(`/${id}`);
                      setModalOpen(false);
                    }}
                    $height={'30rem'}
                    $padding={[0, 10, 0, 10]}
                    $fontSize='var(--fz-sm)'>
                    상세보기
                  </Button>
                </div>
              </ModalTitleBox>
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
