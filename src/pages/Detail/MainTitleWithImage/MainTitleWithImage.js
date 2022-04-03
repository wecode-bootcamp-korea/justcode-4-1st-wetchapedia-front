import styles from './MainTitleWithImage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faPlus,
  faBookmark,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
// import RatingsCard from './RatingsCard';

function MainTitleWithImage() {
  // const [starImg, SetStarImg] = useState({
  //   stars: [],
  // });
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const [want, setWant] = useState(false);
  const [howWasIt, setHowWasIt] = useState('평가하기');

  useEffect(() => {
    if (rating == 0) {
      return setHowWasIt('평가하기');
    }
    if (rating == 1) {
      return setHowWasIt('최악이에요');
    }
    if (rating == 2) {
      return setHowWasIt('싫어요');
    }
    if (rating == 3) {
      return setHowWasIt('재미없어요');
    }
    if (rating == 4) {
      return setHowWasIt('별로에요');
    }
    if (rating == 5) {
      return setHowWasIt('부족해요');
    }
    if (rating == 6) {
      return setHowWasIt('보통이에요');
    }
    if (rating == 7) {
      return setHowWasIt('볼만해요');
    }
    if (rating == 8) {
      return setHowWasIt('재미있어요');
    }
    if (rating == 9) {
      return setHowWasIt('훌륭해요!');
    }
    if (rating == 10) {
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
        <img
          className={styles.movieSceneImage}
          src="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/image/1/1.jpg"
        />
      </div>
      <section className={styles.infoBlock}>
        <img
          className={styles.poster}
          src="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/1.png"
        />
        <section className={styles.titlesAndIcons}>
          <article className={styles.movieTitle}>이별 후의 두 사람</article>
          <p className={styles.movieInfo}>
            2001 &middot; 모험/가족/판타지 &middot; 영국/미국
          </p>
          <div className={styles.averageRating}>
            평균 <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
            {'  '}
            4.3
          </div>
          <article className={styles.clickables}>
            <div className={styles.starAndLetter}>
              <p className={styles.rateStars}>{howWasIt}</p>
              <div className={styles.rating}>
                <div className={styles.eachStars}>
                  <img
                    className={1 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_1.png"
                    // key={stars.id}
                    onClick={() => {
                      rating === 1 ? setRating(0) : setRating(1);
                    }}
                    onMouseEnter={() => setHover(1)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={2 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_2.png"
                    // key={stars.id}
                    onClick={() => {
                      rating === 2 ? setRating(0) : setRating(2);
                    }}
                    onMouseEnter={() => setHover(2)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={3 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_3.png"
                    // key={stars.id}
                    onClick={() => {
                      rating === 3 ? setRating(0) : setRating(3);
                    }}
                    onMouseEnter={() => setHover(3)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={4 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_4.png"
                    // key={stars.id}
                    onClick={() => {
                      rating === 4 ? setRating(0) : setRating(4);
                    }}
                    onMouseEnter={() => setHover(4)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={5 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_5.png"
                    // key={stars.id}
                    onClick={() => {
                      rating === 5 ? setRating(0) : setRating(5);
                    }}
                    onMouseEnter={() => setHover(5)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={6 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_6.png"
                    // key={stars.id}
                    onClick={() => {
                      rating === 6 ? setRating(0) : setRating(6);
                    }}
                    onMouseEnter={() => setHover(6)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={7 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_7.png"
                    // key={stars.id}
                    onClick={() => {
                      rating === 7 ? setRating(0) : setRating(7);
                    }}
                    onMouseEnter={() => setHover(7)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={8 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_8.png"
                    // key={stars.id}
                    onClick={() => {
                      rating === 8 ? setRating(0) : setRating(8);
                    }}
                    onMouseEnter={() => setHover(8)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={9 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_9.png"
                    // key={stars.id}
                    onClick={() => {
                      rating === 9 ? setRating(0) : setRating(9);
                    }}
                    onMouseEnter={() => setHover(9)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
                <div className={styles.eachStars}>
                  <img
                    className={10 <= (hover || rating) ? styles.on : styles.off}
                    src="/images/star/star_10.png"
                    // key={stars.id}
                    onClick={() => {
                      rating === 10 ? setRating(0) : setRating(10);
                    }}
                    onMouseEnter={() => setHover(10)}
                    onMouseLeave={() => setHover(rating)}
                  />
                </div>
              </div>
            </div>
            {/* 별 하드코딩 끝 */}
            <div className={styles.icons}>
              <div className={styles.wantToWrapper}>
                <FontAwesomeIcon icon={faPlus} className={styles.notYet} />
                {/* <FontAwesomeIcon icon={faBookmark} className={styles.yesPlease} /> 눌렀을때 리본으로 변경 */}
                <p className={styles.wantTo}> 보고싶어요</p>
              </div>
              <div className={styles.commentWrapper}>
                <FontAwesomeIcon icon={faPencil} className={styles.notYet} />
                <p className={styles.comment}> 코멘트</p>
              </div>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
}
export default MainTitleWithImage;
