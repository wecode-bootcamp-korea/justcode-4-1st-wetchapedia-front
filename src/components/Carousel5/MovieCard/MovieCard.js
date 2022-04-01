import styles from './MovieCard.module.scss';

const MovieCard = props => {
  return (
    <div
      //style={{ width: props.MovieCardWrapperWidth }}
      className={styles.MovieCardWrapper}
    >
      <div className={styles.PosterBox}>
        <div className={styles.SequenceNumberBox}>{props.sequenceNumber}</div>
        <img className={styles.PosterImage} src={props.imgUrl} />
      </div>
      <div className={styles.MovieInfoWrapper}>
        <div className={styles.MovieInfoTitle}>{props.title}</div>
        <div className={styles.MovieInfoSubWrapper}>
          <div>{props.releasedYear + '·' + props.countryName}</div>
          <div className={styles.MovieInfoRating}>
            평균 ★ {props.averageRatingScore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
