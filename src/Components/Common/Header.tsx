import { useState } from 'react';
import {
  HeaderWrap,
  Input,
  LoginBtn,
  Logo,
  Profile,
} from './Common.style';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <HeaderWrap>
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
