import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Search.module.scss';

function SearchList(props) {
  const navigate = useNavigate();

  const goToSearchPage = () => {
    navigate(`/Search?${props.item}`);
  };

  return (
    <li className={styles.SearchContent} onMouseDown={goToSearchPage}>
      {props.item}
    </li>
  );
}
export default SearchList;
