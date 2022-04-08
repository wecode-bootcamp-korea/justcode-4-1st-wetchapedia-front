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
// import RatingsCard from './RatingsCard';

function MainTitleWithImage(props) {
  // const [starImg, SetStarImg] = useState({
  //   stars: [],
  // });
  const [images, setImages] = useState('');
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState({ userRatingInfo: { rating_val: 'N' } });
  const [want, setWant] = useState(false);
  const [howWasIt, setHowWasIt] = useState('평가하기');
  const [wantHover, setWantHover] = useState(false);
  const [commentHover, setCommentHover] = useState(false);
  const [commentEdit, setCommentEdit] = useState(false);

  // const starRef = useRef(null);
  // const commentRef = useRef(false);

  useEffect(() => {
    fetch(`/movie/images/${props.movie_id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImages(data.movieImages[0].images_url);
      });
  }, [props.movie_id]);

  useEffect(() => {
    fetch(`/rating/${props.movie_id}`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setRating(data);
      });
    console.log(rating.userRatingInfo.rating_val);
  }, []);
  const commentEditOpen = () => {
    console.log('true');
    setCommentEdit(true);
  };

  const commentEditClose = () => {
    console.log('false');
    setCommentEdit(false);
  };

  const onStarClick = num => {
    console.log(num);

    console.log(rating);
    // let editRating = { ...rating };

    // if (rating.userRatingInfo.rating_val === 'N') {
    // setRating({ userRatingInfo: { rating_val: num } });
    //   console.log('평가 없을때', rating);
    //   fetch(`/rating/${props.movie_id}`, {
    //     method: 'POST',
    //     requestbody: JSON.stringify({
    //       movieid: props.movie_id,
    //       ratingval: rating,
    //     }),
    //   }).then(res => res.json);
    // }
    // //평가를 취소할 때
    if (rating.userRatingInfo.rating_val === num) {
      setRating({ userRatingInfo: { rating_val: 0 } });
      console.log('점수 삭제 할때', rating);
    }

    setRating({ userRatingInfo: { rating_val: num } });
    console.log('별점 등록 완료');
    fetch(`/rating/${props.movie_id}`, {
      method: 'POST',
      requestbody: JSON.stringify({
        movieid: props.movie_id,
        ratingval: rating,
      }),
    }).then(res => res.json);

    // //새로 누른 평가가 이전과 다를 때
    // if (
    //   rating.userRatingInfo.rating_val != num &&
    //   typeof rating.userRatingInfo.rating_val == 'number'
    // ) {
    //   setRating({ userRatingInfo: { rating_val: num } });
    //   console.log('평가가 바뀔 때', rating);
    //   fetch(`/rating/${props.movie_id}`, {
    //     method: 'PATCH',
    //     requestbody: JSON.stringify({
    //       movieid: props.movie_id,
    //       ratingval: rating,
    //     }),
    //   }).then(res => res.json);
    // }
    // };
  };
  useEffect(() => {
    if (rating.userRatingInfo.rating_val == 'N') {
      return setHowWasIt('평가하기');
    }
    if (rating.userRatingInfo.rating_val == 0.5) {
      return setHowWasIt('최악이에요');
    }
    if (rating.userRatingInfo.rating_val == 1) {
      return setHowWasIt('싫어요');
    }
    if (rating.userRatingInfo.rating_val == 1.5) {
      return setHowWasIt('재미없어요');
    }
    if (rating.userRatingInfo.rating_val == 2) {
      return setHowWasIt('별로에요');
    }
    if (rating.userRatingInfo.rating_val == 2.5) {
      return setHowWasIt('부족해요');
    }
    if (rating.userRatingInfo.rating_val == 3) {
      return setHowWasIt('보통이에요');
    }
    if (rating.userRatingInfo.rating_val == 3.5) {
      return setHowWasIt('볼만해요');
    }
    if (rating.userRatingInfo.rating_val == 4) {
      return setHowWasIt('재미있어요');
    }
    if (rating.userRatingInfo.rating_val == 4.5) {
      return setHowWasIt('훌륭해요!');
    }
    if (rating.userRatingInfo.rating_val == 5) {
      return setHowWasIt('최고에요!');
    }
  }, [rating]);

  // useEffect(() => {
  //   fetch('/data/ratingStars.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       SetStarImg(data);
  //     });
  // }, []);
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.imageWrapper}>
        <img className={styles.movieSceneImage} src={'http://' + images} />
      </div>
      <section className={styles.infoBlock}>
        <img className={styles.poster} src={`http://${props.poster_url}`} />
        <section className={styles.titlesAndIcons}>
          <article className={styles.movieTitle}>{props.movie_name}</article>
          <p className={styles.movieInfo}>
            {props.release_date} &middot; {props.genre_name} &middot;{' '}
            {props.country_name}
          </p>
          <div className={styles.averageRating}>
            평균 <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
            {'  '}
            {props.movieRating.ratings_avg} {props.movieRating.ratings_total}
          </div>
          <article className={styles.clickables}>
            <div className={styles.starAndLetter}>
              <p className={styles.rateStars}>{howWasIt}</p>
              <div className={styles.rating}>
                <div className={styles.eachStars}>
                  <img
                    className={
                      0.5 <= (hover || rating.userRatingInfo.rating_val)
                        ? styles.on
                        : styles.off
                    }
                    src="/images/star/star_1.png"
                    onClick={() => {
                      // rating === 1 ? setRating(0) : setRating(1);
                      onStarClick(0.5);
                    }}
                    onMouseEnter={() => setHover(0.5)}
                    onMouseLeave={() =>
                      setHover(rating.userRatingInfo.rating_val)
                    }
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={
                      1 <= (hover || rating.userRatingInfo.rating_val)
                        ? styles.on
                        : styles.off
                    }
                    src="/images/star/star_2.png"
                    onClick={() => {
                      onStarClick(1);
                    }}
                    onMouseEnter={() => setHover(1)}
                    onMouseLeave={() =>
                      setHover(rating.userRatingInfo.rating_val)
                    }
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={
                      1.5 <= (hover || rating.userRatingInfo.rating_val)
                        ? styles.on
                        : styles.off
                    }
                    src="/images/star/star_3.png"
                    onClick={() => {
                      onStarClick(1.5);
                    }}
                    onMouseEnter={() => setHover(1.5)}
                    onMouseLeave={() =>
                      setHover(rating.userRatingInfo.rating_val)
                    }
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={
                      2 <= (hover || rating.userRatingInfo.rating_val)
                        ? styles.on
                        : styles.off
                    }
                    src="/images/star/star_4.png"
                    onClick={() => {
                      onStarClick(2);
                    }}
                    onMouseEnter={() => setHover(2)}
                    onMouseLeave={() =>
                      setHover(rating.userRatingInfo.rating_val)
                    }
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={
                      2.5 <= (hover || rating.userRatingInfo.rating_val)
                        ? styles.on
                        : styles.off
                    }
                    src="/images/star/star_5.png"
                    onClick={() => {
                      onStarClick(2.5);
                    }}
                    onMouseEnter={() => setHover(2.5)}
                    onMouseLeave={() =>
                      setHover(rating.userRatingInfo.rating_val)
                    }
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={
                      3 <= (hover || rating.userRatingInfo.rating_val)
                        ? styles.on
                        : styles.off
                    }
                    src="/images/star/star_6.png"
                    onClick={() => {
                      onStarClick(3);
                    }}
                    onMouseEnter={() => setHover(3)}
                    onMouseLeave={() =>
                      setHover(rating.userRatingInfo.rating_val)
                    }
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={
                      3.5 <= (hover || rating.userRatingInfo.rating_val)
                        ? styles.on
                        : styles.off
                    }
                    src="/images/star/star_7.png"
                    onClick={() => {
                      onStarClick(3.5);
                    }}
                    onMouseEnter={() => setHover(3.5)}
                    onMouseLeave={() =>
                      setHover(rating.userRatingInfo.rating_val)
                    }
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={
                      4 <= (hover || rating.userRatingInfo.rating_val)
                        ? styles.on
                        : styles.off
                    }
                    src="/images/star/star_8.png"
                    onClick={() => {
                      onStarClick(4);
                    }}
                    onMouseEnter={() => setHover(4)}
                    onMouseLeave={() =>
                      setHover(rating.userRatingInfo.rating_val)
                    }
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={
                      4.5 <= (hover || rating.userRatingInfo.rating_val)
                        ? styles.on
                        : styles.off
                    }
                    src="/images/star/star_9.png"
                    onClick={() => {
                      onStarClick(4.5);
                    }}
                    onMouseEnter={() => setHover(4.5)}
                    onMouseLeave={() =>
                      setHover(rating.userRatingInfo.rating_val)
                    }
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={
                      5 <= (hover || rating.userRatingInfo.rating_val)
                        ? styles.on
                        : styles.off
                    }
                    src="/images/star/star_10.png"
                    onClick={() => {
                      onStarClick(5);
                    }}
                    onMouseEnter={() => setHover(5)}
                    onMouseLeave={() =>
                      setHover(rating.userRatingInfo.rating_val)
                    }
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
                onClick={
                  want === true ? () => setWant(false) : () => setWant(true)
                }
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
                {/* <FontAwesomeIcon icon={faBookmark} className={styles.yesPlease} /> 눌렀을때 리본으로 변경 */}
                <p className={styles.wantTo}> 보고싶어요</p>
              </div>
              <div
                className={styles.commentWrapper}
                onMouseEnter={() => setCommentHover(true)}
                onMouseLeave={() => setCommentHover(false)}
                onClick={
                  commentEdit === true ? commentEditClose : commentEditOpen
                }
              >
                <FontAwesomeIcon
                  icon={faPencil}
                  className={
                    commentHover === true ? styles.notYetHover : styles.notYet
                  }
                />
                <p className={styles.comment}> 코멘트</p>
              </div>
              <CommentEditComponent
                open={commentEdit}
                close={commentEditClose}
              />
            </div>
          </article>
        </section>
      </section>
    </div>
  );
}
export default MainTitleWithImage;
