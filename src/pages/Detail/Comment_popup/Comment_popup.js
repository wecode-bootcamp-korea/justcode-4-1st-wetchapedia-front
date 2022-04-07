import styles from './Comment_popup.module.scss';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentSlash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { text } from '@fortawesome/fontawesome-svg-core';

const Comment_popup = props => {
  const [saveBtnActive, setSaveBtnActive] = useState(false);
  const [isCommented, setIsCommented] = useState(false);
  const [prevText, setPrevText] = useState('');
  const [textareaValue, setTextAreaValue] = useState('');
  const [textValueLength, setTextValueLength] = useState(0);
  const [num, setNum] = useState(0);
  const textArea = useRef();
  const saveBtn = useRef();
  // const { open, close } = props;

  // 글자수 세기
  useEffect(() => {
    setNum(textValueLength);
  }, [textValueLength]);

  const handleLength = e => {
    if (num > 200) {
      e.target.value = e.target.value.substring(0, 200);
    }
  };

  // textArea 바깥 눌러도 textArea 선택되도록
  const handletextAreaOnFocus = () => {
    textArea.current.focus();
  };

  const handleSaveBtn = () => {
    textArea.current.value.length > 0
      ? setSaveBtnActive(true)
      : setSaveBtnActive(false);
  };

  useEffect(() => {
    // setTextAreaValue(textareaValue);
    console.log(textareaValue);
  }, [textareaValue]);

  //comment 가져오기
  useEffect(() => {
    fetch(`/comment/content?movieId=${props.movieId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        console.log('result:', result);
        setIsCommented(result.CommentResult);
      });
  }, []);

  // useEffect(() => {
  //   setPrevText(isCommented[0].comment);
  //   console.log(prevText);
  // }, [isCommented]);

  //comment 추가 (검증 완)
  const commentAdd = () => {
    fetch('/comment/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: textareaValue,
        movieId: props.movieId,
      }),
    })
      .then(res => res.json())
      .then(result => {
        // comment 등록 성공
        if (result.SUCCESS === 'COMMENT_INSERT') {
          alert('등록 성공!');
          // close Comment popup
        }
      });
  };

  // comment 수정 (검증 완)
  const commentModify = () => {
    fetch('/comment/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: textareaValue,
        movieId: props.movieID,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.SUCCESS === 'COMMENT_MODIFY') {
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
          // `${styles.modal}`
        }
        // onclick={close}
      >
        <section className={styles.comment}>
          <header className={styles.header}>
            <span className={styles.header__movieTitle}>{props.movieName}</span>
            <div
              className={styles.header__closeBtn}
              // onClick={close}
            >
              <FontAwesomeIcon
                icon={faXmark}
                className={styles.header__closeBtn__icon}
              />
            </div>
          </header>
          <main className={styles.main} onClick={handletextAreaOnFocus}>
            <textarea
              className={styles.textarea}
              placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
              ref={textArea}
              onKeyUp={e => {
                setTextValueLength(e.target.value.length);
                setTextAreaValue(e.target.value);
                handleSaveBtn();
              }}
              onChange={handleLength}
            >
              {/* {useEffect(() => {
                return prevText.length > 0 ? prevText : 'bye';
              }, [prevText])} */}
            </textarea>
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
                  // commentAdd();
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
