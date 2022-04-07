import styles from './Comment_popup.module.scss';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentSlash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { text } from '@fortawesome/fontawesome-svg-core';

const Comment_popup = () => {
  const [saveBtnActive, setSaveBtnActive] = useState(false);
  const [inputValueLength, setInputValueLength] = useState(0);
  const [num, setNum] = useState(0);
  const textArea = useRef();
  const saveBtn = useRef();
  // const { open, close } = props;

  useEffect(() => {
    setNum(inputValueLength);
  }, [inputValueLength]);

  const handleInputOnFocus = () => {
    textArea.current.focus();
  };

  const handleSaveBtn = () => {
    textArea.current.value.length > 0
      ? setSaveBtnActive(true)
      : setSaveBtnActive(false);
  };

  const handleLength = e => {
    if (num > 200) {
      e.target.value = e.target.value.substring(0, 200);
    }
  };

  const commentAdd = () => {
    fetch('/comment/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: '',
        movieId: '',
      }),
    })
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        // comment 등록 성공
        if (result.message === 'COMMENT_INSERT') {
          alert('등록 성공!');
          // close Comment popup
        }
      });
  };

  const commentModify = () => {
    fetch('/comment/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: '',
        movieId: '',
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'COMMENT_MODIFY') {
          alert('수정 완료!');
        }
      });
  };

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
          <main className={styles.main} onClick={handleInputOnFocus}>
            <textarea
              className={styles.textarea}
              placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
              ref={textArea}
              onKeyUp={e => {
                setInputValueLength(e.target.value.length);
                handleSaveBtn();
              }}
              onChange={handleLength}
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
              <div className={styles.footer__right__num}>{`${num}/200`}</div>
              <button
                className={styles.footer__right__saveBtn}
                ref={saveBtn}
                disabled={!saveBtnActive ? true : false}
                onClick={() => {
                  // 저장되어 있을 시에? Comment Modify : Comment Add
                  commentAdd();
                  commentModify();
                }}
                // 저장되어 있을 시에? 수정 : 저장
              >
                저장
              </button>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Comment_popup;
