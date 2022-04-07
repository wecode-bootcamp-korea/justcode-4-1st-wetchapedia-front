import { useState } from 'react';
import styles from './MainTitleWithImage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import CommentDeleteModal from './CommentDeleteModal';
import Comment_popup from '../Comment_popup/Comment_popup';
import disableScroll from 'disable-scroll';

function CommentEditComponent(props) {
  const { open, close } = props;
  const [deleteModal, setDeleteModal] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false); //코멘트 작성, 수정 모달창 관리용
  //코멘트 삭제 모달창 함수
  const openModal = () => {
    setDeleteModal(true);
  };
  const closeModal = () => {
    setDeleteModal(false);
  };

  const openPopup = () => {
    setPopupOpen(true);
    disableScroll.on();
  };
  const closePopup = () => {
    setPopupOpen(close);
    disableScroll.off();
  };

  return (
    <div className={open ? styles.popUpOpen : styles.popUpOpenInvisible}>
      <div className={styles.buttonWrapper}>
        <div className={styles.commentEdit} onClick={openPopup()}>
          <FontAwesomeIcon icon={faPencil} className={styles.modalPencil} />
          코멘트 수정
        </div>
        <div
          className={styles.commentDelete}
          onClick={deleteModal ? closeModal : openModal}
        >
          <FontAwesomeIcon icon={faTrash} className={styles.trash} /> 코멘트
          삭제
        </div>
        <CommentDeleteModal showDelete={deleteModal} closeDelete={closeModal} />
      </div>
      <Comment_popup open={popupOpen} close={closePopup} />
    </div>
  );
}

export default CommentEditComponent;
