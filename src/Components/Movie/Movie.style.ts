import styled, { keyframes } from 'styled-components';
import { mobile } from '../../Style/Global';

export const MovieListWrap = styled.div`
  position: relative;
  width: 100%;
  padding: var(--gap-md) var(--gap-lg);
  h2 {
    font-size: var(--fz-xxl);
    margin-bottom: var(--gap-md);
  }
  .swiper {
    padding-bottom: var(--gap-md);
  }
  .swiper-pagination {
    text-align: right;
    opacity: 1;
    bottom: 0;
    .swiper-pagination-bullet {
      background: var(--g_50);
    }
    .swiper-pagination-bullet-active {
      background: var(--white);
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: var(--white);
    padding-bottom: var(--gap-md);
    &:after {
      font-size: var(--fz-lg);
    }
  }
  @media (max-width: ${mobile}) {
    padding: var(--gap-sm) var(--gap-md);
    h2 {
      font-size: var(--fz-xl);
    }
    .swiper-pagination {
      transform: scale(0.8);
      transform-origin: right top;
    }
    .swiper-button-prev {
      left: 5rem;
    }
    .swiper-button-next {
      right: 5rem;
    }
  }
`;
export const SlideBox = styled.div`
  position: relative;
  width: 100%;
  transform: scale(0.95);
  padding-top: 56.25%;
  border-radius: 10rem;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3rem solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out;
    z-index: 1;
  }
  div {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    padding: var(--gap-xs);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    p {
      color: var(--white);
      font-size: var(--fz-sm);
      font-weight: var(--fw-bold);
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
    div {
      opacity: 1;
      visibility: visible;
    }
  }
  @media (max-width: ${mobile}) {
    transform: scale(0.98);
    div {
      display: none;
    }
  }
`;

export const ModalWrap = styled.div`
  position: fixed;
  z-index: 15;
  inset: 0;
  background: rgba(17, 17, 17, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
export const ModalBox = styled.div`
  position: relative;
  width: 70%;
  max-width: 800rem;
  height: 95vh;
  overflow: hidden;
  background: var(--g_100);
  border-radius: 10rem;
  animation: ${fadeIn} 0.4s forwards;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: ${mobile}) {
    max-width: initial;
    width: 90%;
  }
`;
export const ModalClose = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 30;
  right: 15rem;
  top: 15rem;
  width: 30rem;
  height: 30rem;
  border-radius: 4rem;
  background: rgba(17, 17, 17, 0.6);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
`;
export const ModalImage = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  img {
    position: absolute;
    min-width: 100%;
    width: auto;
    height: 100%;
    object-fit: cover;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const ModalText = styled.div`
  padding: var(--gap-xl);
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${mobile}) {
    padding: var(--gap-md);
  }
`;
export const ModalTitle = styled.div`
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${mobile}) {
    height: 30%;
  }
  p {
    font-size: var(--fz-lg);
    @media (max-width: ${mobile}) {
      font-size: var(--fz-md);
    }
  }
  h2 {
    font-size: var(--fz-xxxl);
    @media (max-width: ${mobile}) {
      font-size: var(--fz-xl);
      margin-bottom: 0;
    }
  }
  span {
    font-size: var(--fz-md);
    @media (max-width: ${mobile}) {
      font-size: var(--fz-sm);
    }
  }
`;
export const ModalInfo = styled.div`
  height: 65%;
  font-size: var(--fz-lg);
  line-height: var(--lh-md);
  padding-top: var(--gap-lg);
  overflow-y: auto;
  @media (max-width: ${mobile}) {
    height: 70%;
    font-size: var(--fz-sm);
    padding-top: 0;
    margin-top: var(--gap-md);
  }
  &::-webkit-scrollbar-track {
    background-color: var(--g_10);
  }
  &::-webkit-scrollbar {
    width: 6px;
    background-color: var(--g_10);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--g_50);
  }
`;
