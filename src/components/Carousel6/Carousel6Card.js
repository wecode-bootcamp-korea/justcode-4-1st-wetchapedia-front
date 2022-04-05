import styles from './Carousel6.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Carousel6Card({ movies }) {
  return (
    <section className={styles.posterArea}>
      <img className={styles.posterImg} src={movies.imgUrl} />
      <div className={styles.info}>
        <p className={styles.movieName}>{movies.name}</p>
        <p className={styles.ratings}>
          평균
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          {movies.ratings}
        </p>
      </div>
    </section>
  );
}

export default Carousel6Card;
