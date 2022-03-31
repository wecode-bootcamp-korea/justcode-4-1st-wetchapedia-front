import styles from './Gallery.module.scss';
import { useEffect, useState } from 'react';

function GalleryImages(props) {
  const name = [props.img, props.index];
  return (
    <img
      src={props.img}
      alt={props.name}
      className={styles.Images}
      onClick={() => props.modal(name)}
    />
  );
}
export default GalleryImages;
