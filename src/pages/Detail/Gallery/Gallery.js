import styles from './Gallery.module.scss';
import GalleryImages from './GalleryImages';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';

function Gallery() {
  const [images, setImages] = useState([]);
  const [scrollX, setScrollX] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Section = useRef();

  const setCursor = event => {
    setScrollX(event.target.scrollLeft);
  };
  const moveLeft = scrollOffset => {
    Section.current.scrollLeft += scrollOffset;
  };
  const modal = imgUrl => {
    if (imgUrl) {
      setIsModalOpen(true);
    }
    console.log(isModalOpen);
  };
  useEffect(() => {
    fetch('/data/Images.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImages(data);
      });
  }, []);

  return (
    <>
      <div className={styles.Gallery}>
        <div className={styles.GalleryTitle}>갤러리</div>
        <div className={styles.ImageSection} onScroll={setCursor} ref={Section}>
          {images.map(comment => {
            return (
              <GalleryImages
                key={comment.id}
                id={comment.id}
                img={comment.imgUrl}
                name={comment.name}
                modal={modal}
              />
            );
          })}
        </div>
        {scrollX === 0 ? null : (
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className={styles.ChevronLeft}
            onClick={() => moveLeft(-345)}
          />
        )}
        {scrollX === 1210 ? null : (
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className={styles.ChevronRight}
            onClick={() => moveLeft(345)}
          />
        )}
      </div>
      {isModalOpen && <div className={styles.modalSection}>sdfsdf</div>}
    </>
  );
}
export default Gallery;
