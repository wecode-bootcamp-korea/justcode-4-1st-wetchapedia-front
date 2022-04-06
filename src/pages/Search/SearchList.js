import { useState, useEffect } from 'react';
import styles from './Search.module.scss';
import SearchMovieImage from './SearchListImage';

function SearchMovie() {
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
    <div className={styles.Search}>
      <div className={styles.SearchHeader}>
        <div className={styles.SearchMovieTilte}>" "의 검색결과</div>
      </div>
      <div className={styles.SearchMovie}>
        <div className={styles.SearchSection}>
          {movieData.map(comment => {
            return (
              <SearchMovieImage
                key={comment.id}
                id={comment.id}
                imgUrl={comment.poster_url}
                name={comment.name}
                year={comment.year}
                country={comment.country}
                genre={comment.genre_name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default SearchMovie;
