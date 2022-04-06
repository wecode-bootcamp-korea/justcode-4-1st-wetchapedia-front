import styles from './MainInfo.module.scss';
import ProductionList from './ProductionList';
import InfoList from './InfoList';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

function MainInfo() {
  const [profileList, setProfileList] = useState([]);
  const [infoList, setInfoList] = useState({});
  const [scrollX, setScrollX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const containerRef = useRef();
  const innerRef = useRef();

  useEffect(() => {
    fetch('/data/movieInfo.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setInfoList(data[0]);
      });
  }, []);

  useEffect(() => {
    fetch('/data/production.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProfileList(data);
      });
  }, []);

  function handleScrollX(event) {
    setScrollX(event.target.scrollLeft);
    setSlideWidth(event.target.scrollWidth - event.target.offsetWidth);
  }

  function handlePrevBtn() {
    innerRef.current.scrollBy(-containerRef.current.offsetWidth, 0);
  }

  function handleNextBtn() {
    innerRef.current.scrollBy(containerRef.current.offsetWidth, 0);
  }

  return (
    <div className="MainInfo">
      <div className={styles.info__wrapper}>
        <section className={styles.info__basic}>
          <header className={styles.basic__header}>
            <h2 className={styles.header__title}>기본정보</h2>
            {/* <h3>더보기</h3> */}
          </header>
          {/* {infoList.map(el => {
            return (
              <InfoList
                key={el.movie_id}
                name={el.movie_name}
                release_date={el.release_date}
                genre={el.genre_name}
                country={el.country_name}
                run_time={el.run_time}
                age={el.movie_age}
                story={el.movie_story}
              />
            );
          })} */}
          <InfoList
            key={infoList.movie_id}
            name={infoList.movie_name}
            date={infoList.release_date}
            country={infoList.country_name}
            genre={infoList.genre_name}
            run_time={infoList.run_time}
            age={infoList.movie_age}
            story={infoList.movie_story}
          />
        </section>
        <section className={styles.info__actor}>
          <header className={`${styles.actor__header} ${styles.header__title}`}>
            출연/제작
          </header>

          <div className={styles.actor__content} ref={containerRef}>
            <ul
              className={styles.actor__ul}
              ref={innerRef}
              onScroll={handleScrollX}
            >
              {scrollX >= 1 ? (
                <button
                  className={`${styles.ul__prevBtn} ${styles.ul__btn}`}
                  onClick={handlePrevBtn}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              ) : null}
              {profileList.map(el => {
                return (
                  <ProductionList key={el.id} name={el.name} url={el.imgUrl} />
                );
              })}
            </ul>
            {scrollX !== slideWidth || scrollX === 0 ? (
              <button
                className={`${styles.ul__nextBtn} ${styles.ul__btn}`}
                onClick={handleNextBtn}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            ) : null}
          </div>
        </section>
        <section className={styles.info__graph}>
          <header className={styles.graph__header}>
            <h2 className={styles.header__title}>별점 그래프</h2>
            <div className={styles.header__average}>
              <span>평균 ★4.3</span>
              <span>(103만명)</span>
            </div>
          </header>
        </section>
      </div>
    </div>
  );
}

export default MainInfo;
