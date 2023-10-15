import { SetStateAction, useEffect, useState } from 'react';
import {
  HeaderWrap,
  Input,
  LoginBtn,
  Logo,
  Profile,
} from './Layout.style';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false); // auth 설정 후 삭제하기
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [searchWord, setSearchWord] = useState<string>('');
  const navigate = useNavigate();

  const scrollHeader = () => {
    if (window.scrollY > 50) setIsScroll(true);
    else setIsScroll(false);
  };

  const searchValueChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchWord(e.target.value);
    navigate(`/search?q=${e.target.value}`);
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
      <Input
        placeholder='검색어를 입력하세요'
        type='text'
        value={searchWord}
        onChange={searchValueChange}
      />
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
