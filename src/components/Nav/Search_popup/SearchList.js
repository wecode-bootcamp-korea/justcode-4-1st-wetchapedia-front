import React, { useState } from 'react';
import styles from '../../Nav/Nav.module.scss';

function SearchList(props) {
  return <li className={styles.SearchContent}>{props.item}</li>;
}
export default SearchList;
