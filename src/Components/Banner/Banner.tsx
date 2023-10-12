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
import { Button } from '../../Style/UI';
import { FaTimes } from 'react-icons/fa';

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState<MovieProps | null>(null);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [videoPlay, setVideoPlay] = useState<boolean>(false);

  const requestBannerMovie = async () => {
    try {
      const res = await requestApi(requests.requestMovieNowPlaying);
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

  console.log(bannerMovie, ':::::');

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
              <p>{truncate(bannerMovie?.overview, 100)}</p>

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
