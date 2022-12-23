import React from "react";
import { useNavigate } from "react-router";

const Members = (props) => {
  const navigate = useNavigate();
  const goHome = () => {
    if (window.confirm("홈으로 이동하시겠습니까?")) {
      navigate("/", { state: { from: "/members" } });
    }
  };

  const imgSize = { width: 80, height: 80 };
  const list = props.members.map((item, index) => {
    return (
      <div className="col-4" key={index}>
        <img
          src={item.photo}
          className="img-thumbnail"
          alt={item.name}
          style={imgSize}
        />
        <br />
        <h6>{item.name}</h6>
        <br />
        <br />
      </div>
    );
  });
  return (
    <div className="">
      <h2>Members</h2>
      <div className="div"></div>
      <div className="div"></div>
      <div className="div"></div>
      <div className="container">
        <div className="row">{list}</div>
      </div>
      <button className="btn btn-primary" onClick={goHome}>
        GO Home
      </button>
    </div>
  );
};

export default Members;
