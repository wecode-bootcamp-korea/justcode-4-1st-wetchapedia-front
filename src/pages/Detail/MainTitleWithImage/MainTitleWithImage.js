import styles from './MainTitleWithImage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faPlus,
  faBookmark,
  faPencil,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import CommentDelete from './CommentDeleteModal';
import CommentEditComponent from './CommentEditComponent';
import Login from '../../../components/Login_popup/Login';
import disableScroll from 'disable-scroll';
import Comment_popup from '../Comment_popup/Comment_popup';
// import RatingsCard from './RatingsCard';

function MainTitleWithImage(movieInfo) {
  // const [starImg, SetStarImg] = useState({
  //   stars: [],
  // });
  const [loginOpen, setLoginOpen] = useState(false); //로그인 모달 오픈 useState

  const [hover, setHover] = useState(0);
  // const [loginModal, setLoginModal] = useState(false);
  const [rating, setRating] = useState(userRatingInfo[{ rating_val: 'N' }]); //유저가 평가하는 별점 State
  const [want, setWant] = useState(wantInfo[{ want_val: 0 }]); //보고싶어요 state
  const [howWasIt, setHowWasIt] = useState('평가하기'); // 별점에 따른 메세지
  const [wantHover, setWantHover] = useState(false); //보고싶어요 아이콘 호버 시 효과 주기 용
  const [commentHover, setCommentHover] = useState(false); //코멘트 아이콘 호버 시 효과 주기 용
  const [commentEdit, setCommentEdit] = useState(false); //로그인 상태시 코멘트 클릭시 코멘트 수정 관련 팝업 관리
  const [isLogin, setIsLogin] = useState(false); //로그인 검증에 쓰이는 State
  const [popupOpen, setPopupOpen] = useState(false); //코멘트 등록 모달 여는 state
  Const[(loginOpen, setLoginOpen)] = useState(false); //로그인 모달을 여는 코드
  // const [movieInfo, setMovieInfo] = useState({
  //   movie_id: 0,
  //   movie_name: '',
  //   release_date: '',
  //   genre_name: '',
  //   country_name: '',
  //   poster_url: '',
  // });
  const [movieImage, setMovieImage] = useState({
    images_url: '',
  });
  const [movieRating, setMovieRating] = useState(
    movieRatingsInfo[
      {
        ratings_total: 0,
        ratings_avg: 0,
      }
    ]
  );

  //민지님 모달 오픈 코드
  const openLogin = () => {
    setLoginOpen(true);
    disableScroll.on();
  };

  const closeLogin = () => {
    setLoginOpen(false);
    disableScroll.off();
  };

  const openPopup = () => {
    setPopupOpen(true);
    disableScroll.on();
  };

  const closePopup = () => {
    setPopupOpen(close);
    disableScroll.off();
  };

  //영화 전반적인 정보
  useEffect(() => {
    fetch('/movie/images/1', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setMovieInfo(data);
      });
  });

  //영화 스틸컷
  useEffect(() => {
    fetch('/movie/images/movie', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setMovieInfo(data);
      });
  });

  //영화 별점 정보 가져오기
  useEffect(() => {
    fetch(`rating/movie-ratings/${movieInfo.movie_id}`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setMovieRating(data);
      });
  });

  // 로그인 검증
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

  //유져가 평가한 영화 별점 가져오기
  useEffect(() => {
    fetch(`/rating/${movieInfo.movie_id}`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setRating(data);
      });
  }, rating);

  //유저의 보고 싶어요 정보 가져오기
  useEffect(() => {
    fetch(`want/${movieInfo.movie_id}`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setWant(data);
      });
  });

  //별을 눌렀을때 별점 매기기 (로그인 성공시 별점 있을 때, 로그인 성공시 별점 없을때, 로그인 미성공 시)
  const onStarClick = num => {
    //평가가 없을 때
    if (rating === 'N') {
      setRating(num);
      fetch(`/rating/${movieInfo.movie_id}`, {
        method: 'POST',
        requestbody: JSON.stringify({
          movieid: movieInfo.movie_id,
          ratingval: rating,
        }),
      }).then(res => res.json);
    }
    //평가를 취소할 때
    if (rating === num) {
      fetch(`/rating/${movieInfo.movie_id}`, { method: 'DELETE' })
        .then(res.json())
        .then(data => {});
    }

    //새로 누른 평가가 이전과 다를 때
    if (rating != num && typeof rating === 'number') {
      fetch(`/rating/${movieInfo.movie_id}`, {
        method: 'PATCH',
        requestbody: JSON.stringify({
          movieid: movieInfo.movie_id,
          ratingval: rating,
        }),
      }).then(res => res.json);
    }
  };

  //별점  눌렀을떄 로그인 안되어 있을시 로그인 모달 열기, 로그인 되어있다면 onStarClick()
  const checkLoginStar = num => {
    if (!isLogin) {
      setLoginModal(true);
    }
    if (isLogin) {
      onStarClick(num);
    }
  };

  //보고싶어요 눌렀을때 로그인 안되어 있을 시 로그인 모달 열기, 로그인 되어있다면 setWant

  const checkLoginWant = () => {
    if (!isLogin) {
      setLoginModal(true);
    }
    if (isLogin) {
      setWant(want === 0 ? 1 : 0);
    }
  };
  //코멘트 눌렀을때 로그인 안되어있을 시 로그인 모달 열기, 로그인 되어 있다면 코멘트 모달 열기
  const checkLoginComment = () => {
    if (!isLogin) {
      setLoginModal(true);
    }
    if (isLogin) {
      commentEditOpen();
    }
  };

  //코멘트 수정 열기
  const commentEditOpen = () => {
    setCommentEdit(true);
  };

  //코멘트 수정 닫기
  const commentEditClose = () => {
    setCommentEdit(false);
  };

  //별점에 따른 메세지
  useEffect(() => {
    if (rating == 'N') {
      return setHowWasIt('평가하기');
    }
    if (rating == 0.5) {
      return setHowWasIt('최악이에요');
    }
    if (rating == 1) {
      return setHowWasIt('싫어요');
    }
    if (rating == 1.5) {
      return setHowWasIt('재미없어요');
    }
    if (rating == 2) {
      return setHowWasIt('별로에요');
    }
    if (rating == 2.5) {
      return setHowWasIt('부족해요');
    }
    if (rating == 3) {
      return setHowWasIt('보통이에요');
    }
    if (rating == 3.5) {
      return setHowWasIt('볼만해요');
    }
    if (rating == 4) {
      return setHowWasIt('재미있어요');
    }
    if (rating == 4.5) {
      return setHowWasIt('훌륭해요!');
    }
    if (rating == 5) {
      return setHowWasIt('최고에요!');
    }
  }, [rating]);

  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.movieSceneImage}
          src="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/image/1/1.jpg"
          // src = {movieImage.images_url}
        />
      </div>
      <section className={styles.infoBlock}>
        <img
          className={styles.poster}
          src="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/1.png"
          // src={movieInfo.poster_url}
        />
        <section className={styles.titlesAndIcons}>
          <article className={styles.movieTitle}>
            이별 후의 두 사람
            {/* {movieInfo.movie_name} */}
          </article>
          <p className={styles.movieInfo}>
            {movieInfo.release_date} &middot; {movieInfo.genre_name} &middot;{' '}
            {movieInfo.country_name}
          </p>
          <div className={styles.averageRating}>
            평균 <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
            {'  '}
            4.3
            {/* {movieRating.ratings_avg} */}
            {/* {movieRating.ratings_total} */}
          </div>
          <article className={styles.clickables}>
            <div className={styles.starAndLetter}>
              <p className={styles.rateStars}>{howWasIt}</p>
              <div className={styles.rating}>
                <div className={styles.eachStars}>
                  <img
                    className={
                      0.5 <= (hover || rating) ? styles.on : styles.off
                    }
                    src="/images/star/star_1.png"
                    onClick={() => {
                      // rating === 1 ? setRating(0) : setRating(1);
                      checkLoginStar(0.5);
                    }}
                    onMouseEnter={() => setHover(0.5)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={1 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_2.png"
                    onClick={() => {
                      checkLoginStar(1);
                    }}
                    onMouseEnter={() => setHover(1)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={
                      1.5 <= (hover || rating) ? styles.on : styles.off
                    }
                    src="/images/star/star_3.png"
                    onClick={() => {
                      checkLoginStar(1.5);
                    }}
                    onMouseEnter={() => setHover(1.5)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={2 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_4.png"
                    onClick={() => {
                      checkLoginStar(2);
                    }}
                    onMouseEnter={() => setHover(2)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={
                      2.5 <= (hover || rating) ? styles.on : styles.off
                    }
                    src="/images/star/star_5.png"
                    onClick={() => {
                      checkLoginStar(2.5);
                    }}
                    onMouseEnter={() => setHover(2.5)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={3 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_6.png"
                    onClick={() => {
                      checkLoginStar(3);
                    }}
                    onMouseEnter={() => setHover(3)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={
                      3.5 <= (hover || rating) ? styles.on : styles.off
                    }
                    src="/images/star/star_7.png"
                    onClick={() => {
                      checkLoginStar(3.5);
                    }}
                    onMouseEnter={() => setHover(3.5)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={4 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_8.png"
                    onClick={() => {
                      checkLoginStar(4);
                    }}
                    onMouseEnter={() => setHover(4)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={
                      4.5 <= (hover || rating) ? styles.on : styles.off
                    }
                    src="/images/star/star_9.png"
                    onClick={() => {
                      checkLoginStar(4.5);
                    }}
                    onMouseEnter={() => setHover(4.5)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={5 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_10.png"
                    onClick={() => {
                      checkLoginStar(5);
                    }}
                    onMouseEnter={() => setHover(5)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
              </div>
            </div>
            {/* 별 하드코딩 끝 */}
            <div className={styles.icons}>
              <div
                className={styles.wantToWrapper}
                onMouseEnter={() => setWantHover(true)}
                onMouseLeave={() => setWantHover(false)}
                onClick={checkLoginWant()}
              >
                <FontAwesomeIcon
                  icon={want === true ? faBookmark : faPlus}
                  className={
                    want === true
                      ? wantHover === true
                        ? styles.yesPleaseHover
                        : styles.yesPlease
                      : wantHover === true
                      ? styles.notYetHover
                      : styles.notYet
                  }
                />
                <p className={styles.wantTo}> 보고싶어요</p>
              </div>
              <div
                className={styles.commentWrapper}
                onMouseEnter={() => setCommentHover(true)}
                onMouseLeave={() => setCommentHover(false)}
                onClick={checkLoginComment()}
              >
                <FontAwesomeIcon
                  icon={faPencil}
                  className={
                    commentHover === true ? styles.notYetHover : styles.notYet
                  }
                />
                <p className={styles.comment}> 코멘트</p>
              </div>
              {/* <Comment_popup open={popupOpen} close={closePopup} /> //코멘트 등록/수정창 모달 */}
              <CommentEditComponent
                open={commentEdit}
                close={commentEditClose}
              />
            </div>
          </article>
        </section>
      </section>
      <Login open={loginOpen} close={closeLogin} />
    </div>
  );
}
export default MainTitleWithImage;
