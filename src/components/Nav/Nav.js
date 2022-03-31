import React, { useState } from 'react';
import styles from './Nav.module.scss';
import Login from '../Login_popup/Login';
import SignUp from '../Signup_popup/SignUp';
import disableScroll from 'disable-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const openLogin = () => {
    setLoginOpen(true);
    disableScroll.on();
  };

  const closeLogin = () => {
    setLoginOpen(false);
    disableScroll.off();
  };

  const openSignUp = () => {
    setSignUpOpen(true);
    disableScroll.on();
  };

  const closeSignUp = () => {
    setSignUpOpen(false);
    disableScroll.off();
  };

  return (
    <div className="Nav">
      <div className={styles.navBar}>
        <button
          className={styles.logoWrapper}
          onClick={() => {
            window.location.reload();
          }}
        >
          <img alt="로고" src="./images/wetcha.png" className={styles.logo} />
        </button>
        <div className={`${styles.component_wrapper} component_wrapper`}>
          <div className={styles.searchBar_wrapper}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.searchBar__icon}
            />
            <input
              className={styles.navBar__searchBar}
              placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
            />
          </div>
          <button className={styles.navBar__signInBtn} onClick={openLogin}>
            로그인
          </button>

          <button className={styles.navBar__signUpBtn} onClick={openSignUp}>
            회원가입
          </button>
        </div>
      </div>
      <Login open={loginOpen} close={closeLogin} />
      <SignUp open={signUpOpen} close={closeSignUp} />
    </div>
  );
}
export default Nav;
