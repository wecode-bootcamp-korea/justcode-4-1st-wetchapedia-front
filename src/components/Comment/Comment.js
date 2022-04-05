import React, { useState, useEffect } from 'react';
import styles from './Comment.module.scss';
import CommentCard from './CommentCard/CommentCard';

const Comment = props => {
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
    if (SliderWrapperRef.current.scrollLeft == 0) {
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
      <div className={styles.Title}>코멘트</div>
      <div
        className={styles.SliderWrapper}
        ref={SliderWrapperRef}
        onScroll={checkScrollPos}
      >
        {/*레이아웃 완료 여기 맵만 해주면 끝남*/}
        <CommentCard
          userName="김아무개"
          likeCount="3"
          commentContent="세계를 향한 대화, 유니코드로 하십시오. 제10회 유니코드 국제 회의가 1997년 3월 10일부터 12일까지 독일의 마인즈에서 열립니다. 지금 등록하십시오. 이 회의에서는 업계 전반의 전문가들이 함께 모여 다음과 같은 분야를 다룹니다. - 인터넷과 유니코드, 국제화와 지역화, 운영 체제와 응용 프로그램에서 유니코드의 구현, 글꼴, 문자 배열, 다국어 컴퓨팅."
        />
        <CommentCard
          userName="김아무개"
          likeCount="3"
          commentContent="세계를 향한 대화, 유니코드로 하십시오. 제10회 유니코드 국제 회의가 1997년 3월 10일부터 12일까지 독일의 마인즈에서 열립니다. 지금 등록하십시오. 이 회의에서는 업계 전반의 전문가들이 함께 모여 다음과 같은 분야를 다룹니다. - 인터넷과 유니코드, 국제화와 지역화, 운영 체제와 응용 프로그램에서 유니코드의 구현, 글꼴, 문자 배열, 다국어 컴퓨팅."
        />
        <CommentCard
          userName="김아무개"
          likeCount="3"
          commentContent="세계를 향한 대화, 유니코드로 하십시오. 제10회 유니코드 국제 회의가 1997년 3월 10일부터 12일까지 독일의 마인즈에서 열립니다. 지금 등록하십시오. 이 회의에서는 업계 전반의 전문가들이 함께 모여 다음과 같은 분야를 다룹니다. - 인터넷과 유니코드, 국제화와 지역화, 운영 체제와 응용 프로그램에서 유니코드의 구현, 글꼴, 문자 배열, 다국어 컴퓨팅."
        />
        <CommentCard
          userName="김아무개"
          likeCount="3"
          commentContent="세계를 향한 대화, 유니코드로 하십시오. 제10회 유니코드 국제 회의가 1997년 3월 10일부터 12일까지 독일의 마인즈에서 열립니다. 지금 등록하십시오. 이 회의에서는 업계 전반의 전문가들이 함께 모여 다음과 같은 분야를 다룹니다. - 인터넷과 유니코드, 국제화와 지역화, 운영 체제와 응용 프로그램에서 유니코드의 구현, 글꼴, 문자 배열, 다국어 컴퓨팅."
        />
      </div>
    </div>
  );
};

export default Comment;
