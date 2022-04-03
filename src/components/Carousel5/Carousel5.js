import React, { useState, useEffect } from 'react';
import styles from './Carousel5.module.scss';
import MovieCard from './MovieCard/MovieCard';
const Carousel5 = props => {
  const SliderWrapperRef = React.useRef();
  const [leftButtonOn, setLeftButtonOn] = useState('Hidden');
  const [rightButtonOn, setRightButtonOn] = useState('');
  function MoveRight() {
    SliderWrapperRef.current.scrollTo(
      SliderWrapperRef.current.scrollLeft +
        SliderWrapperRef.current.clientWidth,
      0
    );
  }
  function MoveLeft() {
    SliderWrapperRef.current.scrollTo(
      SliderWrapperRef.current.scrollLeft -
        SliderWrapperRef.current.clientWidth,
      0
    );
  }
  function checkScrollPos() {
    if (SliderWrapperRef.current.scrollLeft <= 0) {
      setLeftButtonOn('Hidden');
      return;
    } else if (
      SliderWrapperRef.current.scrollLeft >=
      SliderWrapperRef.current.scrollWidth -
        SliderWrapperRef.current.clientWidth
    ) {
      setRightButtonOn('Hidden');
      return;
    }
    setRightButtonOn('');
    setLeftButtonOn('');
  }

  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:7000/Main/Carousel?CategoryId=${props.categoryId}&limit=${props.limit}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        let dataForCarousel = data.CarouselData;
        let sequenceNumber = 1;
        dataForCarousel.map(data => {
          data.release_year = data.release_date.split('/')[0];
          data.sequenceNumber = sequenceNumber;
          sequenceNumber += 1;
        });
        setMovieList(dataForCarousel);
      });
  }, []);

  return (
    <div className={styles.Carousel5Wrapper}>
      <div className={styles.DivForButton}>
        <button
          className={`${styles.Button} ${styles[leftButtonOn]}`}
          onClick={MoveLeft}
        >
          <img
            width="-100%"
            src="/image/arrow.svg"
            style={{
              WebkitTransform: 'scaleX(-1)',
              transform: 'scaleX(-1)',
            }}
          />
        </button>
        <button
          className={`${styles.Button} ${styles[rightButtonOn]}`}
          onClick={MoveRight}
        >
          <img src="/image/arrow.svg" />
        </button>
      </div>
      <div className={styles.Title}>{props.categoryName}</div>
      <div
        className={styles.SliderWrapper}
        ref={SliderWrapperRef}
        onScroll={checkScrollPos}
      >
        {movieList.map(movie => {
          return (
            <MovieCard
              title="테스트"
              releasedYear={movie.release_year}
              countryName={movie.country_name}
              averageRatingScore={movie.count}
              sequenceNumber={movie.sequenceNumber}
              imgUrl={'https://' + movie.poster_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel5;
