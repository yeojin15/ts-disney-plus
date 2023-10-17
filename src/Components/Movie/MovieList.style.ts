import styled, { css } from 'styled-components';
import { mobile } from '../../Common/Global';

interface MovieSliderProps {
  $padding?: number[];
}
export const MovieListWrap = styled.div<MovieSliderProps>`
  position: relative;
  width: 100%;
  padding: var(--gap-md) var(--gap-lg);
  ${({ $padding }) => css`
    padding: ${$padding?.map((val) => `${val}rem`).join(' ')};
  `}
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
    ${({ $padding }) => css`
      padding: ${$padding?.map((val) => `${val}rem`).join(' ')};
    `}
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
