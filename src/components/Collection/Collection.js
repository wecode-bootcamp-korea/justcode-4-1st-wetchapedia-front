import { useRef } from 'react';
import React from 'react';
import styles from './Collection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

function Collection() {
  // const [slideSpot, setSlideSpot] = useState();
  const containerRef = useRef();
  const innerRef = useRef();

  function handlePrevBnt() {
    const slideWidth = containerRef.current.offsetWidth;
    innerRef.current.scrollBy(-slideWidth, 0);
  }
  function handleNextBtn() {
    const slideWidth = containerRef.current.offsetWidth;
    innerRef.current.scrollBy(slideWidth, 0);
  }

  return (
    <div className={`Collection ${styles.collection}`}>
      <h1 className={styles.collection__title}>위챠피디아 컬렉션</h1>

      <button
        className={`${styles.collection__btn} ${styles.collection__prevBtn}`}
        onClick={handlePrevBnt}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={styles.collection__btn__icons}
        />
      </button>
      <div className={styles.collection__container} ref={containerRef}>
        <section className={styles.collection__inner} ref={innerRef}>
          <div className={styles.collection__card}>
            <section className={styles.collection__imgBoxContainer}>
              <div className={styles.collection__imgBox}>
                <img
                  src="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/3.png"
                  alt="movie-poster"
                  className={styles.collection__images}
                />
              </div>
              <div className={styles.collection__imgBox}>
                <img
                  src="./images/fullstack4_1.jpg"
                  alt="movie-poster"
                  className={styles.collection__images}
                />
              </div>
              <div className={styles.collection__imgBox}>
                <img
                  src="./images/fullstack4_1.jpg"
                  alt="movie-poster"
                  className={styles.collection__images}
                />
              </div>
              <div className={styles.collection__imgBox}>
                <img
                  src="./images/fullstack4_1.jpg"
                  alt="movie-poster"
                  className={styles.collection__images}
                />
              </div>
            </section>
            <h2 className={styles.collection__card__title}>박스오피스 순위</h2>
          </div>
          <div className={styles.collection__card}>
            <section className={styles.collection__imgBoxContainer}>
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
            </section>
            <h2>위챠 Top 10 영화</h2>
          </div>
          <div className={styles.collection__card}>
            <section className={styles.collection__imgBoxContainer}>
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
            </section>
            <h2>평균 별점이 높은 작품</h2>
          </div>
          <div className={styles.collection__card}>
            <section className={styles.collection__imgBoxContainer}>
              <div className={styles.collection__imgBox}>
                <img
                  src="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/3.png"
                  alt="movie-poster"
                  className={styles.collection__images}
                />
              </div>
              <div className={styles.collection__imgBox}>
                <img
                  src="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/3.png"
                  alt="movie-poster"
                  className={styles.collection__images}
                />
              </div>
              <div className={styles.collection__imgBox}>
                <img
                  src="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/3.png"
                  alt="movie-poster"
                  className={styles.collection__images}
                />
              </div>
              <div className={styles.collection__imgBox}>
                <img
                  src="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/3.png"
                  alt="movie-poster"
                  className={styles.collection__images}
                />
              </div>
            </section>
            <h2>김영서 평론가님이 최근에 재미있게 본</h2>
          </div>
          <div className={styles.collection__card}>
            <section className={styles.collection__imgBoxContainer}>
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
            </section>
            <h2>공민지 평론가님이 최근에 재미있게 본</h2>
          </div>
          <div className={styles.collection__card}>
            <section className={styles.collection__imgBoxContainer}>
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
            </section>
            <h2>서채원 평론가님이 최근에 재미있게 본</h2>
          </div>
          <div className={styles.collection__card}>
            <section className={styles.collection__imgBoxContainer}>
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
            </section>
            <h2>이의택 평론가님이 최근에 재미있게 본</h2>
          </div>
          <div className={styles.collection__card}>
            <section className={styles.collection__imgBoxContainer}>
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
              <div className={styles.collection__imgBox} />
            </section>
            <h2>임경훈 평론가님이 최근에 재미있게 본</h2>
          </div>
        </section>
      </div>
      <button
        className={`${styles.collection__btn} ${styles.collection__nextBtn}`}
        onClick={handleNextBtn}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className={styles.collection__nexBtn__icons}
        />
      </button>
    </div>
  );
}
export default Collection;
