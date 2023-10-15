import { useEffect, useState } from 'react';
import { requestApi, baseURL } from '../../Util/api';
import requests from '../../Util/requests';
import {
  BannerContainer,
  BannerInfo,
  BannerInfoText,
  BannerWrap,
  Iframe,
  VideoInfo,
  VideoOverlay,
} from './Banner.style';
import { MovieProps } from '../../Util/interface';
import { Button } from '../../Common/UI';
import { FaTimes } from 'react-icons/fa';
import { mobile } from '../../Common/Global';

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState<MovieProps | null>(null);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [videoPlay, setVideoPlay] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    window.innerWidth
  );
  const [truncateLimit, setTruncateLimit] = useState<number>(100);

  const requestBannerMovie = async () => {
    try {
      const res = await requestApi.get(requests.requestMovieNowPlaying);
      const randomId = Math.floor(Math.random() * res.data.results.length);
      const randomMovieId = res.data.results[randomId].id;
      const { data: bannerVideo } = await requestApi.get(
        `movie/${randomMovieId}`,
        { params: { append_to_response: 'videos' } }
      );
      setBannerMovie(bannerVideo);
    } catch (error) {
      console.log(error);
    }
  };

  const truncate = (str: string | undefined, n: number): string => {
    return str ? (str.length <= n ? str : str.slice(0, n) + '...') : '';
  };

  useEffect(() => {
    setTrigger(!trigger);
  }, [bannerMovie]);

  useEffect(() => {
    let intervalId: NodeJS.Timer | number | undefined;
    if (!videoPlay) {
      requestBannerMovie();
      intervalId = setInterval(() => {
        requestBannerMovie();
      }, 5000);
    }
    return () => {
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
    };
  }, [videoPlay]);

  useEffect(() => {
    const windowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= parseInt(mobile, 10)) {
      setTruncateLimit(80);
    } else {
      setTruncateLimit(100);
    }
  }, [windowWidth]);

  return (
    <BannerWrap>
      {videoPlay ? (
        <BannerContainer>
          <VideoInfo>
            <Iframe
              src={`https://www.youtube.com/embed/${bannerMovie?.videos?.results[0]?.key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${bannerMovie?.videos?.results[0]?.key}`}
              width='640'
              height='360'
              allow='autoplay; fullscreen'
            />
            <VideoOverlay>
              <Button
                $width='50rem'
                $height='50rem'
                $padding={[0, 0, 0, 0]}
                onClick={() => setVideoPlay(false)}>
                <FaTimes size={30} />
              </Button>
            </VideoOverlay>
          </VideoInfo>
        </BannerContainer>
      ) : (
        <BannerContainer
          key={trigger ? 'trigger1' : 'trigger2'}
          style={{
            backgroundImage: `url("${baseURL}${bannerMovie?.backdrop_path}")`,
          }}>
          <BannerInfo>
            <BannerInfoText>
              <h2>{bannerMovie?.title || bannerMovie?.original_title}</h2>
              <p>{truncate(bannerMovie?.overview, truncateLimit)}</p>

              {bannerMovie?.videos?.results?.[0]?.key && (
                <Button onClick={() => setVideoPlay(true)}>play</Button>
              )}
            </BannerInfoText>
          </BannerInfo>
        </BannerContainer>
      )}
    </BannerWrap>
  );
};

export default Banner;
