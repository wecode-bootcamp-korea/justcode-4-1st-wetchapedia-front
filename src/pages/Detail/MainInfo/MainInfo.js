import styles from './MainInfo.module.scss';
// import GalleryImages from './GalleryImages';
// import { useEffect, useState, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainInfo() {
  return (
    <div className="MainInfo">
      <div className={styles.info__wrapper}>
        <section className={styles.info__basic}>
          <header className={styles.basic__header}>
            <h2 className={styles.header__title}>기본정보</h2>
            {/* <h3>더보기</h3> */}
          </header>
          <div className={styles.basic__content}>
            <p>Harry Potter and the Sorcerer's Stone</p>
            <p>2001 · 영국 · 모험</p>
            <p>2시간 32분 · 전체</p>
            <p className={styles.movie__story}>
              해리 포터는 위압적인 버논 숙부와 냉담한 이모 페투니아, 욕심 많고
              버릇 없는 사촌 더들리 밑에서 갖은 구박을 견디며 계단 밑 벽장에서
              생활한다. 이모네 식구들 역시 해리와의 동거가 불편하기는 마찬가지,
              이모...
            </p>
          </div>
        </section>
        <section className={styles.info__actor}>
          <header className={`${styles.actor__header} ${styles.header__title}`}>
            출연/제작
          </header>
          <div className={styles.actor__content}>
            <ul className={styles.actor__ul}>
              <li className={styles.actor__list}>
                <div className={styles.actor__list__imgBox} />
                <div className={styles.actor__list__text}>
                  <p className={styles.actor__list__text__name}>
                    크리스 콜럼버스
                  </p>
                  <p className={styles.actor__list__text__role}>감독</p>
                </div>
              </li>
              <li className={styles.actor__list}>
                <div className={styles.actor__list__imgBox} />
                <div className={styles.actor__list__text}>
                  <p className={styles.actor__list__text__name}>
                    크리스 콜럼버스
                  </p>
                  <p className={styles.actor__list__text__role}>감독</p>
                </div>
              </li>
              <li className={styles.actor__list}>
                <div className={styles.actor__list__imgBox} />
                <div className={styles.actor__list__text}>
                  <p className={styles.actor__list__text__name}>
                    크리스 콜럼버스
                  </p>
                  <p className={styles.actor__list__text__role}>감독</p>
                </div>
              </li>
              <li className={styles.actor__list}>
                <div className={styles.actor__list__imgBox} />
                <div className={styles.actor__list__text}>
                  <p className={styles.actor__list__text__name}>
                    크리스 콜럼버스
                  </p>
                  <p className={styles.actor__list__text__role}>감독</p>
                </div>
              </li>
              <li className={styles.actor__list}>
                <div className={styles.actor__list__imgBox} />
                <div className={styles.actor__list__text}>
                  <p className={styles.actor__list__text__name}>
                    크리스 콜럼버스
                  </p>
                  <p className={styles.actor__list__text__role}>감독</p>
                </div>
              </li>
              <li className={styles.actor__list}>
                <div className={styles.actor__list__imgBox} />
                <div className={styles.actor__list__text}>
                  <p className={styles.actor__list__text__name}>
                    크리스 콜럼버스
                  </p>
                  <p className={styles.actor__list__text__role}>감독</p>
                </div>
              </li>
              <li className={styles.actor__list}>
                <div className={styles.actor__list__imgBox} />
                <div className={styles.actor__list__text}>
                  <p className={styles.actor__list__text__name}>
                    크리스 콜럼버스
                  </p>
                  <p className={styles.actor__list__text__role}>감독</p>
                </div>
              </li>
              <li className={styles.actor__list}>
                <div className={styles.actor__list__imgBox} />
                <div className={styles.actor__list__text}>
                  <p className={styles.actor__list__text__name}>
                    크리스 콜럼버스
                  </p>
                  <p className={styles.actor__list__text__role}>감독</p>
                </div>
              </li>
              <li className={styles.actor__list}>
                <div className={styles.actor__list__imgBox} />
                <div className={styles.actor__list__text}>
                  <p className={styles.actor__list__text__name}>
                    크리스 콜럼버스
                  </p>
                  <p className={styles.actor__list__text__role}>감독</p>
                </div>
              </li>
            </ul>
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
