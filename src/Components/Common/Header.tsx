import { useEffect, useState } from 'react';
import {
  HeaderWrap,
  Input,
  LoginBtn,
  Logo,
  Profile,
} from './Common.style';

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false); // auth 설정 후 삭제하기
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const scrollHeader = () => {
    if (window.scrollY > 50) setIsScroll(true);
    else setIsScroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <HeaderWrap $isScroll={isScroll}>
      <Logo>
        <img
          alt='Disney Plus Logo'
          src='/images/logo.svg'
          onClick={() => (window.location.href = '/')}
        />
      </Logo>
      <Input placeholder='검색어를 입력하세요' />
      {isLogin ? (
        <Profile onClick={() => setIsLogin(false)}>
          <img src='/images/logo.svg' alt='profile' />
        </Profile>
      ) : (
        <LoginBtn onClick={() => setIsLogin(true)}>LOGIN</LoginBtn>
      )}
    </HeaderWrap>
  );
};

export default Header;
