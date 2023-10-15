import styled, { keyframes } from 'styled-components';
import { mobile } from '../../Common/Global';
import { Button } from '../../Common/UI';

export const BannerWrap = styled.div`
  width: 100%;
  height: 650rem;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 70rem;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      var(--g_100)
    );
  }
  @media (max-width: ${mobile}) {
    height: 450rem;
    &:after {
      height: 30rem;
    }
  }
`;

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;
export const BannerContainer = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${fadeIn} 0.5s linear forwards;
`;
export const BannerInfo = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgb(34, 34, 34);
  background: linear-gradient(
    90deg,
    rgba(34, 34, 34, 1) 0%,
    rgba(2, 0, 36, 0.518) 34%,
    rgba(255, 255, 255, 0.01) 100%
  );
`;
export const BannerInfoText = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 20%;
  padding-left: calc(var(--gap-lg) * 2);
  h2 {
    font-size: var(--fz-xxxl);
    font-weight: var(--fw-bold);
  }
  p {
    width: 30%;
    margin-top: var(--gap-lg);
    font-size: var(--fz-md);
    line-height: var(--lh-md);
    word-break: keep-all;
    margin-bottom: var(--gap-lg);
  }
  @media (max-width: ${mobile}) {
    padding: 0 var(--gap-md);
    bottom: 7%;
    h2 {
      font-size: var(--fz-xxl);
    }
    p {
      width: 80%;
      font-size: var(--fz-sm);
    }
    ${Button} {
      transform: scale(0.8);
      transform-origin: left top;
    }
  }
`;

export const VideoInfo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:hover ${Button} {
    opacity: 1;
    visibility: visible;
  }
`;
export const VideoOverlay = styled.div`
  position: absolute;
  width: 100rem;
  height: 100rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  @media (max-width: ${mobile}) {
    width: 40rem;
    height: 40rem;
    top: initial;
    bottom: 0;
  }
  ${Button} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    color: var(--white);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    @media (max-width: ${mobile}) {
      opacity: 1;
      visibility: visible;
    }
  }
`;
export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  border: none;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
