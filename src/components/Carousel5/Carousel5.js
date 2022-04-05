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
      <div className={styles.Title}>위챠 Top 10 영화</div>
      <div
        className={styles.SliderWrapper}
        ref={SliderWrapperRef}
        onScroll={checkScrollPos}
      >
        {/*레이아웃 완료. 여기 맵만 해주면 끝남.*/}
        <MovieCard
          title="서울의 연인들"
          releasedYear="2022"
          countryName="한국"
          averageRatingScore="3.5"
          sequenceNumber="1"
          imgUrl="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/28.png"
        />
        <MovieCard
          title="탐정교실"
          releasedYear="2022"
          countryName="한국"
          averageRatingScore="3.5"
          sequenceNumber="2"
          imgUrl="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/22.png"
        />
        <MovieCard
          title="맨 인 더 룸 3"
          releasedYear="2022"
          countryName="한국"
          averageRatingScore="3.5"
          sequenceNumber="3"
          imgUrl="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/24.png"
        />
        <MovieCard
          title="맨 인 더 룸 3"
          releasedYear="2022"
          countryName="한국"
          averageRatingScore="3.5"
          sequenceNumber="4"
          imgUrl="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/12.png"
        />
        <MovieCard
          title="맨 인 더 룸 3"
          releasedYear="2022"
          countryName="한국"
          averageRatingScore="3.5"
          sequenceNumber="5"
          imgUrl="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/34.png"
        />
        <MovieCard
          title="맨 인 더 룸 3"
          releasedYear="2022"
          countryName="한국"
          averageRatingScore="3.5"
          sequenceNumber="6"
          imgUrl="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/40.png"
        />
        <MovieCard
          title="서울의 연인들"
          releasedYear="2022"
          countryName="한국"
          averageRatingScore="3.5"
          sequenceNumber="7"
          imgUrl="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/23.png"
        />
        <MovieCard
          title="탐정교실"
          releasedYear="2022"
          countryName="한국"
          averageRatingScore="3.5"
          sequenceNumber="8"
          imgUrl="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/50.png"
        />
        <MovieCard
          title="맨 인 더 룸 3"
          releasedYear="2022"
          countryName="한국"
          averageRatingScore="3.5"
          sequenceNumber="9"
          imgUrl="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/4.png"
        />
        <MovieCard
          title="맨 인 더 룸 3"
          releasedYear="2022"
          countryName="한국"
          averageRatingScore="3.5"
          sequenceNumber="10"
          imgUrl="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/25.png"
        />
        <MovieCard
          title="맨 인 더 룸 3"
          releasedYear="2022"
          countryName="한국"
          averageRatingScore="3.5"
          sequenceNumber="11"
          imgUrl="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/22.png"
        />
        <MovieCard
          title="맨 인 더 룸 3"
          releasedYear="2022"
          countryName="한국"
          averageRatingScore="3.5"
          sequenceNumber="12"
          imgUrl="https://raw.githubusercontent.com/nsoarim/wetchaimage/main/poster/45.png"
        />
      </div>
    </div>
  );
};

export default Carousel5;
