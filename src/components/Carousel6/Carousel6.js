import styles from './Carousel6.module.scss';
import { useState, useRef, useEffect } from 'react';
import Carousel6Card from './Carousel6Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

function Carousel6() {
  const [moviePosters, setMoviePosters] = useState({
    movies: [],
  });

  const [scrollXTop, setScrollXTop] = useState(0);
  const [scrollXBottom, setScrollXTBottom] = useState(0);
  const sectionTop = useRef(null);
  const sectionBottom = useRef(null);

  const cursorTop = event => {
    setScrollXTop(event.target.scrollLeft);
    console.log('scrollXtop ', scrollXTop);
    console.log('scrollWidth ', event.target.scrollWidth);
    console.log('clientWidth ', event.target.clientWidth);
    console.log(
      'scrollWidth - clientWidth ',
      event.target.scrollWidth - event.target.clientWidth
    );
  };

  const cursorBottom = event => {
    setScrollXTBottom(event.target.scrollLeft);
  };
  // const cursorBottom = event => {
  //   setScrollX(event.target.scrollLeft);
  // };

  const moveLeftTop = scrollOffset => {
    sectionTop.current.scrollLeft += scrollOffset;
  };

  const moveLeftBottom = scrollOffset => {
    sectionBottom.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    fetch('/data/moviesChae.json')
      .then(res => res.json())
      .then(data => {
        setMoviePosters(data);
      });
  }, []);

  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.carouselComp}>
          <title className={styles.CategoryTitle}>평균별점이 높은 작품</title>
          <section
            className={styles.topSlider}
            onScroll={cursorTop}
            ref={sectionTop}
          >
            {moviePosters.movies.map(movies => (
              <Carousel6Card key={movies.id} movies={movies} />
            ))}
            {scrollXTop === 0 ? null : (
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                className={styles.topLeft}
                onClick={() => {
                  moveLeftTop(-1434);
                }}
              />
            )}
            {scrollXTop > 1400 ? null : (
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                className={styles.topRight}
                onClick={() => {
                  moveLeftTop(1434);
                }}
              />
            )}
          </section>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.carouselComp}>
          <title className={styles.CategoryTitle}>평균별점이 높은 작품</title>
          <section
            className={styles.bottomSlider}
            onScroll={cursorBottom}
            ref={sectionBottom}
          >
            {moviePosters.movies.map(movies => (
              <Carousel6Card key={movies.id} movies={movies} />
            ))}
          </section>
        </div>
        {scrollXBottom === 0 ? null : (
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className={styles.bottomLeft}
            onClick={() => {
              moveLeftBottom(-1434);
            }}
          />
        )}
        {scrollXBottom > 1400 ? null : (
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className={styles.bottomRight}
            onClick={() => {
              moveLeftBottom(1434);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Carousel6;
