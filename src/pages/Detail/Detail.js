import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import MainTitleWithImage from './MainTitleWithImage/MainTitleWithImage';
import Ad from './Ad/Ad';
import Gallery from './Gallery/Gallery';
import MainInfo from './MainInfo/MainInfo';

import Comment from '../../components/Comment/Comment';
import SimilarMovie from './SimilarMovie/SimilarMovie';

import styles from './Detail.module.scss';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

function Detail() {
  const params = useParams();

  const [loginPopUpRequest, setLoginPopUpRequest] = useState(0);
  const [movieInfo, setmovieInfo] = useState({
    movie_id: 0,
    movie_name: '',
    release_date: '',
    genre_name: '',
    country_name: '',
    run_time: 0,
    movie_age: 0,
    movie_story: '',
    poster_url: '',
  });

  const [movieRating, setmovieRating] = useState({
    ratings_total: 0,
    ratings_avg: 0,
  });
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    fetch('/user/verification', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'NOW_LOGIN') {
          setIsLogin(true);
        } else if (result.message === 'NOW_LOGOUT') {
          setIsLogin(false);
        }
      });
  }, []);

  useEffect(() => {
    fetch(`/movie/${params.id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        let movieInfo = data.movieInfo;
        setmovieInfo(movieInfo[0]);
      });

    fetch(`/rating/movie-ratings/${params.id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setmovieRating(data.movieRatingsInfo[0]);
      });
  }, []);

  return (
    <>
      <Nav loginRequest={loginPopUpRequest} />
      <MainTitleWithImage />
      <div className={styles.Wrapper}>
        <div className={styles.detailWrapper}>
          <div className={styles.info__wrapper}>
            <MainInfo movieInfo={movieInfo} movieRating={movieRating} />
            <Comment
              islogin={isLogin}
              movieId={movieInfo.movie_id}
              setLoginPopUpRequest={setLoginPopUpRequest}
            />
            <SimilarMovie genre_name={movieInfo.genre_name} />
          </div>
          <div className={styles.adGalleryWrapper}>
            <Ad />
            <Gallery movieId={movieInfo.movie_id} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Detail;
