import React, { useState, useEffect } from 'react';
import styles from './Nav.module.scss';
import Login from '../Login_popup/Login';
import SignUp from '../SignUp_popUp/SignUp';
import disableScroll from 'disable-scroll';
import SearchList from './Search_popup/SearchList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

let arrayKey = 0;

function Nav() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [SearchOpen, setSearchOpen] = useState(false);
  const [searchWord, setsearchWord] = useState(
    JSON.parse(localStorage.getItem('item')) || []
  );

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

  const SearchOpenModal = () => {
    setSearchOpen(true);
  };

  const SearchCloseModal = () => {
    setSearchOpen(false);
  };

  const pressEnter = e => {
    if (e.key === 'Enter') {
      if (!e.target.value == '') {
        addSearchWord(e.target.value);
        e.target.value = '';
      }
    }
  };

  const addSearchWord = item => {
    const items = {
      id: arrayKey,
      item: item,
    };
    arrayKey += 1;
    setsearchWord(searchWord.concat([items]));
  };

  const SearchDelete = e => {
    setsearchWord([]);
  };

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(searchWord));
  }, [searchWord]);

  return (
    <div className="Nav">
      <header className={styles.navBar_container}>
        <nav className={styles.navBar}>
          {' '}
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
                onFocus={SearchOpenModal}
                onBlur={SearchCloseModal}
                onKeyUp={pressEnter}
              />
              {SearchOpen && (
                <div className={styles.Search}>
                  <ul className={styles.SearchHeader}>
                    <li className={styles.SearchTitle}>최근 검색어</li>
                    <li
                      className={styles.SearchRemove}
                      onMouseDown={SearchDelete}
                    >
                      모두 삭제
                    </li>
                  </ul>
                  <ul>
                    {searchWord == '' && (
                      <li className={styles.SearchContent}>
                        검색어를 입력해 주세요.
                      </li>
                    )}
                    {searchWord.map(comment => {
                      return (
                        <SearchList key={comment.id} item={comment.item} />
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
            <button className={styles.navBar__signInBtn} onClick={openLogin}>
              로그인
            </button>

            <button className={styles.navBar__signUpBtn} onClick={openSignUp}>
              회원가입
            </button>
          </div>
        </nav>
        <Login open={loginOpen} close={closeLogin} openSignUp={openSignUp} />
        <SignUp open={signUpOpen} close={closeSignUp} openLogin={openLogin} />
      </header>
    </div>
  );
}
export default Nav;
