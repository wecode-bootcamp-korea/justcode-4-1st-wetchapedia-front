import styles from './SignUp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const SignUp = props => {
  const { open, close } = props;

  return (
    <div
      className={
        open ? `${styles.openModal} ${styles.modal}` : `${styles.modal}`
      }
      onClick={close}
    >
      {open ? (
        <section
          className={styles.modal__section}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <div className={styles.signUp__logo}>
            <img
              alt="logo"
              src="./images/wetcha.png"
              className={styles.signUp__logo__img}
            />
          </div>
          <div className={styles.signUp__title}>회원가입</div>
          <form className={styles.signUp__form}>
            <input placeholder="이름" className={styles.signUp__form__input} />
            <input
              placeholder="이메일"
              className={styles.signUp__form__input}
            />
            <input
              placeholder="비밀번호"
              className={styles.signUp__form__input}
            />
            <button className={styles.signUp__form__btn}>회원가입</button>
          </form>
          <div className={styles.login}>
            <p>이미 가입하셨나요?</p>
            <button>로그인</button>
          </div>
          <div className={styles.signUp__or}>OR</div>
          <button className={styles.login__facebook}>
            <FontAwesomeIcon
              icon={faFacebook}
              className={styles.login__facebook__logo}
            />
            Facebook으로 로그인
          </button>
        </section>
      ) : null}
    </div>
  );
};

export default SignUp;
