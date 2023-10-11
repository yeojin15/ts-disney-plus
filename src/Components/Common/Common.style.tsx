import styled from 'styled-components';

export const HeaderWrap = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 80rem;
  z-index: 10;
  padding: 0 var(--gap-sm);
  background: var(--g_100);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 100px;
  height: 100%;
  cursor: pointer;
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
  transition: 0.3s;
  &:hover {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 16px,
      rgba(255, 255, 255, 0.05) 0px 8px 32px;
    transform: translateY(-2px);
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
`;
