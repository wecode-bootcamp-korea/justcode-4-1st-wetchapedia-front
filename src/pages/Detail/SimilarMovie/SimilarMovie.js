import { useState, useEffect } from 'react';
import styles from './SimilarMovie.module.scss';
import SimilarMovieImage from './SimilarMovieImage';

function SimilarMovie() {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    fetch('/data/SimilarMovie.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMovieData(data);
      });
  }, []);
  return (
    <section className={styles.SimilarMovie}>
      <div className={styles.SimilarMovieTilte}>비슷한 작품</div>
      <div className={styles.movieSection}>
        {movieData.map(comment => {
          return (
            <SimilarMovieImage
              key={comment.id}
              id={comment.id}
              imgUrl={comment.poster_url}
              name={comment.name}
              rating={comment.count}
              genre={comment.genre_name}
            />
          );
        })}
      </div>
    </section>
  );
}
export default SimilarMovie;
