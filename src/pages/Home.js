import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="header-bt">
        <div className="header-txt">HOME</div>
      </div>

      <div className="home-box">
        <Link className="home-link" to="/novel">
          <div className="home-txt">소설</div>
          <img src="img/novel1.jpg" alt="" className="home-img" />
          <div className="h-line"></div>
        </Link>

        <Link className="home-link" to="/cook">
          <div className="home-txt">요리</div>
          <img src="img/cook1.jpg" alt="" className="home-img" />
          <div className="h-line"></div>
        </Link>

        <Link className="home-link" to="/health">
          <div className="home-txt">건강</div>
          <img src="img/health1.jpg" alt="" className="home-img" />
          <div className="h-line"></div>
        </Link>

        <Link className="home-link" to="/language">
          <div className="home-txt">외국어</div>
          <img src="img/language1.jpg" alt="" className="home-img" />
          <div className="h-line"></div>
        </Link>

        <Link className="home-link" to="/computerit">
          <div className="home-txt">컴퓨터/IT</div>
          <img src="img/computer1.jpg" alt="" className="home-img" />
          <div className="h-line"></div>
        </Link>
      </div>
    </div>
  );
};
export default Home;
