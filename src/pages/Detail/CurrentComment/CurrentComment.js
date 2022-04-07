import styles from './CurrentComment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faPencil } from '@fortawesome/free-solid-svg-icons';
function CurrentComment() {
  return (
    <div className="CurrentComment">
      <section className={styles.commentContainer}>
        <div className={styles.commentWrapper}>
          <div className={styles.comment__profile}>
            <img
              alt="user"
              src="/images/profile.png"
              className={styles.comment__profile__img}
            ></img>
          </div>
          {/* <div className={styles.comment__contentWrapper}> */}
          <div className={styles.comment__content}>
            안녕하세요안녕하세요안녕하세요안녕하세요
          </div>
          {/* </div> */}
          <div className={styles.comment__btnWrapper}>
            <button className={`${styles.deleteBtn} ${styles.btn}`}>
              <FontAwesomeIcon icon={faTrashCan} className={styles.icon} />
              삭제
            </button>
            <button className={`${styles.modifyBtn} ${styles.btn}`}>
              <FontAwesomeIcon icon={faPencil} className={styles.icon} />
              수정
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CurrentComment;
