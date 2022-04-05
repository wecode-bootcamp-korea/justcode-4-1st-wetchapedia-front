import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function SimilarMovieImage(props) {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/Detail/${props.id}`);
  };
  return (
    <section className={styles.SearchSections} onClick={goToDetailPage}>
      <img
        id={props.id}
        src={props.imgUrl}
        alt={props.name}
        className={styles.SearchSectionImg}
      />
      <div className={styles.SearchSectionName}>{props.name}</div>
      <div className={styles.SearchSectionRating}>
        <div className={styles.SearchSectionRatingName}>평균</div>
        <FontAwesomeIcon icon={faStar} className={styles.MovieSectionfaStar} />
        <div className={styles.MovieSectionRating}>{props.rating}</div>
      </div>
      <div className={styles.MovieSectionGenre}>{props.genre}</div>
    </section>
  );
}
export default SimilarMovieImage;
