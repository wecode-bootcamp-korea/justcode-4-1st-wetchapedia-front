import styles from './MainTitleWithImage.module.scss';
import { useState, useRef } from 'react';

function RatingsCard({ stars }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  // const changeClickedEach = id => {};
  // const changeClicked = index => {
  //   for (let i = 0; i <= index; i++) {}
  // };

  const changeHover = index => {};
  return (
    <div className={styles.eachStars}>
      {/* <img className={styles.starStyle} src={stars.imageUrl} key={stars.id}/> */}
      <img
        className={stars.id <= rating ? styles.on : styles.off}
        src={stars.imageUrl}
        // key={stars.id}
        onClick={() => {
          rating === stars.id ? setRating(0) : setRating(stars.id);
        }}
        onMouseEnter={() => setHover(stars.id)}
        onMouseLeave={() => setHover(rating * 2)}
      />
    </div>
  );
}

export default RatingsCard;
