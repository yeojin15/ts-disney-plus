import styled, { keyframes } from 'styled-components';
import { mobile } from '../../Common/Global';

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
export const ModalWrap = styled.div`
  position: fixed;
  z-index: 15;
  inset: 0;
  background: rgba(17, 17, 17, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
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
    max-height: 35%;
    height: auto;
    justify-content: flex-start;
  }
  h2 {
    font-size: var(--fz-xxl);
    margin-bottom: 0;
    @media (max-width: ${mobile}) {
      font-size: var(--fz-lg);
      margin-top: var(--gap-sm);
    }
  }
`;
export const ModalTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${mobile}) {
    justify-content: flex-end;
  }
`;
export const ModalTitleInfo = styled.div`
  font-size: var(--fz-lg);
  span {
    display: block;
    font-size: var(--fz-md);
    margin-top: var(--gap-xs);
  }
  @media (max-width: ${mobile}) {
    display: none;
  }
`;
export const ModalConsole = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--gap-xs);
  p {
    color: var(--primary);
  }
`;
export const ModalInfo = styled.div`
  height: 60%;
  font-size: var(--fz-lg);
  line-height: var(--lh-md);
  padding-top: var(--gap-lg);
  padding-right: var(--gap-sm);
  overflow-y: auto;
  word-break: keep-all;
  @media (max-width: ${mobile}) {
    height: 60%;
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
