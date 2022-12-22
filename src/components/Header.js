import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [nav, setNav] = useState(false); // 메뉴의 초기값을 false로 설정

  const toggleMenu = () => {
    setNav((nav) => !nav); // on,off 개념 boolean
  };
  return (
    <div className="header">
      <div className="menu">
      <Link to={"/members"}>
          <FontAwesomeIcon
            icon={faPerson}
            className="menu-icon"
            onClick={() => toggleMenu()}
          ></FontAwesomeIcon>
      </Link>
        <nav className={nav ? "show-menu" : "hide-menu"}>
          <ul className="gnb">
            <li className="depth">
              <Link className="btn-success" to="/novel">
                소설
              </Link>
            </li>
            <li className="depth">
              <Link className="btn-success" to="/cook">
                요리
              </Link>
            </li>
            <li className="depth">
              <Link className="btn-success" to="/health">
                건강
              </Link>
            </li>
            <li className="depth">
              <Link className="btn-success" to="/language">
                외국어
              </Link>
            </li>
            <li className="depth">
              <Link className="btn-success" to="/computerit">
                컴퓨터/IT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Link className="logo" to={"/"}>
        <img
          src={`${process.env.PUBLIC_URL}/img/logo.png`}
          className="logo-img"
          alt="교보문고"
        />
      </Link>
      <div className="searchbox-wrap">
        <input
          type="text"
          id="search-text"
          placeholder="search"
          className="searchbox"
        ></input>
        <div className="searchbox-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
  );
};
export default Header;
