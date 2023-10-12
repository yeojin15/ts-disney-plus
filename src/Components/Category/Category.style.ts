import styled from 'styled-components';
import { mobile } from '../../Style/Global';

export const CategoryWrap = styled.ul`
  display: grid;
  padding: calc(var(--gap-lg) * 2) var(--gap-lg);
  gap: var(--gap-lg);
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: ${mobile}) {
    gap: var(--gap-md);
    padding: calc(var(--gap-lg) * 2) var(--gap-md) var(--gap-md);
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const CategoryBox = styled.li`
  padding-top: 56.25%;
  border-radius: 10rem;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }

  video {
    width: 105%;
    height: 105%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;
