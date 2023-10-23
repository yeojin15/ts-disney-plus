import { useState } from 'react';
import { AboutWrap, Profile } from './About.style';

const AboutPage = () => {
  const [profile, setProfile] = useState(null);
  // 유저 리스트 보여주고 추가할수있도록(가족계정) 최대 8개? 6개?
  return (
    <AboutWrap>
      <Profile>
        <div className='profile-img'>
          {profile !== null ? (
            <img src='' alt='user' />
          ) : (
            <div className='img' />
          )}
        </div>
        <h2>Yeojin</h2>
      </Profile>
    </AboutWrap>
  );
};

export default AboutPage;
