import styled, { css } from 'styled-components';
import { mobile } from '../../Common/Global';

export const HeaderWrap = styled.header<{ $isScroll: boolean }>`
  ${({ $isScroll }) =>
    $isScroll &&
    css`
      background: rgba(19, 22, 31, 0.7);
      @media (max-width: ${mobile}) {
        background: var(--g_100);
      }
    `}
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 80rem;
  z-index: 10;
  padding: 0 var(--gap-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;

  @media (max-width: ${mobile}) {
    height: 60rem;
    background: var(--g_100);
  }
`;
export const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 100rem;
  height: 100%;
  cursor: pointer;
  @media (max-width: ${mobile}) {
    width: 70rem;
  }
`;
export const Input = styled.input`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300rem;
  height: 40rem;
  border: 1px solid rgba(255, 255, 255, 0.38);
  outline: none;
  background: none;
  border-radius: 4rem;
  padding: 0 var(--gap-sm);
  color: var(--white);
  font-size: var(--fz-sm);
  &::placeholder {
    color: var(--g_10);
    font-size: var(--fz-sm);
  }
  @media (max-width: ${mobile}) {
    width: 150rem;
    height: 35rem;
  }
`;
export const LoginBtn = styled.button`
  padding: 0 var(--gap-xs);
  height: 40rem;
  text-align: center;
  font-size: var(--fz-sm);
  color: var(--white);
  font-family: var(--en);
  border: 1px solid var(--white);
  cursor: pointer;
  border-radius: 4rem;
  transition: 0.3s;
  &:hover {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 16px,
      rgba(255, 255, 255, 0.05) 0px 8px 32px;
    transform: translateY(-2px);
  }
  @media (max-width: ${mobile}) {
    height: 30rem;
    font-size: var(--fz-xs);
  }
`;
export const Profile = styled.a`
  display: flex;
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  overflow: hidden;
  background: var(--white);
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: ${mobile}) {
    width: 35rem;
    height: 35rem;
  }
`;
export const FooterWrap = styled.footer`
  width: 100%;
  padding: calc(var(--gap-lg) * 3) var(--gap-sm);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${mobile}) {
    padding: var(--gap-lg) var(--gap-sm);
  }
`;
export const Quick = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--gap-lg);
  li {
    font-size: var(--fz-sm);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: var(--primary);
    }
  }
`;
