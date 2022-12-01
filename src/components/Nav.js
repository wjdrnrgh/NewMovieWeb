import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { listPageReLoading, focusNav } from "../atom/Atoms";
import styles from "./Nav.module.css";
import config from "../config/config.js";

const Nav = () => {
  const [scroll, setScroll] = useState(false);
  const pageReLoading = useSetRecoilState(listPageReLoading);
  const [focusPath, setFocusPath] = useRecoilState(focusNav);

  let scrollY = 0;

  const handelScroll = () => {
    scrollY = document.documentElement.scrollTop;
    if (scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const optionOnClick = () => {
    pageReLoading(true);
  };

  window.addEventListener("scroll", handelScroll);
  return (
    <nav
      className={styles.navList}
      style={scroll ? { backdropFilter: "blur(5px)" } : { backdropFilter: "" }}
    >
      <div>
        <Link to="/" className={styles.logo} onClick={() => setFocusPath("")}>
          <i className="fab fa-neos"></i>
          <strong>EWFLIX</strong>
        </Link>
      </div>
      <ul className={styles.pageList}>
        {config.map(({ title, path }) => {
          return (
            <li key={title}>
              <Link
                to={`/page/${path}/1`}
                onClick={focusPath !== path ? optionOnClick : null}
                className={`${styles.listItem} ${styles.bottomBar}`}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className={styles.snsList}>
        <li>
          <a
            href="https://github.com/wjdrnrgh"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.listItem}
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/jeong_guk_ho/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.listItem}
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
