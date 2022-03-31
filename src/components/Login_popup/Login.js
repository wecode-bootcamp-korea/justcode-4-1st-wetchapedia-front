import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Login = props => {
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
          <div className={styles.login__logo}>
            <img
              alt="logo"
              src="./images/wetcha.png"
              className={styles.login__logo__img}
            />
          </div>
          <div className={styles.login__title}>로그인</div>
          <form className={styles.login__form}>
            <input placeholder="이메일" className={styles.login__form__input} />
            <input
              placeholder="비밀번호"
              className={styles.login__form__input}
            />
            <button className={styles.login__form__btn}>로그인</button>
          </form>
          <div className={styles.signUp}>
            <p>계정이 없으신가요?</p>
            <button>회원가입</button>
          </div>
          <div className={styles.login__or}>OR</div>
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

export default Login;
