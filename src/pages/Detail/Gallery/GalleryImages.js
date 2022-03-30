import styles from './Gallery.module.scss';
import { useEffect, useState } from 'react';

function GalleryImages(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <img
      src={props.img}
      alt={props.name}
      className={styles.Images}
      onClick={() => props.modal(props.img)}
    />
  );
}
export default GalleryImages;
