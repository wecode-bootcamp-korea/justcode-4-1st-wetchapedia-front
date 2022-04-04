import styles from './Comment_popup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentSlash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Comment_popup = () => {
  // const { open, close } = props;

  return (
    <div className="Comment_popup">
      <div
        className={
          // open ? `${styles.modal} ${styles.openModal}` : `${styles.modal}`
          `${styles.modal} ${styles.openModal}`
        }
        // onclick={close}
      >
        <section className={styles.comment}>
          <header className={styles.header}>
            <span className={styles.header__movieTitle}>
              해리포터와 마법사의 돌
            </span>
            <div className={styles.header__closeBtn}>
              <FontAwesomeIcon
                icon={faXmark}
                className={styles.header__closeBtn__icon}
              />
            </div>
          </header>
          <main className={styles.main}>
            <input
              className={styles.input}
              placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
            />
          </main>
          <footer className={styles.footer}>
            <div>
              <FontAwesomeIcon
                icon={faTwitter}
                className={styles.footer__icons}
              />
              |
              <FontAwesomeIcon
                icon={faCommentSlash}
                className={styles.footer__icons}
              />
            </div>
            <div className={styles.footer__right}>
              <div className={styles.footer__right__num}>0/1000</div>
              <button className={styles.footer__right__saveBtn}>저장</button>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Comment_popup;
