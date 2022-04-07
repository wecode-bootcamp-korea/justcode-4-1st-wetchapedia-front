import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Search.module.scss';

function SearchList(props) {
  const navigate = useNavigate();

  const goToSearchPage = () => {
    navigate(`/search?${props.item}`);
    window.location.reload();
  };

  return (
    <li className={styles.SearchContent} onMouseDown={goToSearchPage}>
      {props.item}
    </li>
  );
}
export default SearchList;
