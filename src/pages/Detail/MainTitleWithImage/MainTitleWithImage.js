import styles from './MainTitleWithImage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faPlus,
  faBookmark,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import RatingsCard from './RatingsCard';
import Footer from '../../components/Footer/Footer';

function MainTitleWithImage() {
  const [starImg, SetStarImg] = useState({
    stars: [],
  });

  useEffect(() => {
    fetch('/data/ratingStars.json')
      .then(res => res.json())
      .then(data => {
        SetStarImg(data);
      });
  }, []);

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
            <div className={styles.rating}>
              <p className={styles.rateStars}>평가하기</p>
              {starImg.stars.map(stars => (
                <RatingsCard key={stars.id} stars={stars} />
              ))}
            </div>
            <div className={styles.icons}>
              <p className={styles.wantTo}>
                <FontAwesomeIcon icon={faPlus} className={styles.notYet} />
                보고싶어요
                {/* <FontAwesomeIcon icon={faBookmark} className={styles.yesPlease} /> 눌렀을때 리본으로 변경 */}
              </p>
              <p className={styles.comment}>
                <FontAwesomeIcon icon={faPencil} className={styles.notYet} />{' '}
                코멘트
              </p>
            </div>
          </article>
        </section>
      </section>
      <Footer />
    </div>
  );
}
export default MainTitleWithImage;
