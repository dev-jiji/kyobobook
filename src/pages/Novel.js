import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./../api/request";
import instance from "./../api/axios";

// import "./Paging.css";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
const Novel = (props) => {
  const [novel, setNovel] = useState([]);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);
  const getClick = () => {
    axios
      .get("http://192.168.0.183:9988/api/book/category/1")
      .then((res) => setNovel(res.data));
  };
  const fetchData = async () => {
    // 멤버목록 가져오기
    const resultNovel = await instance.get(requests.fetchNovel);
    setNovel(resultNovel.data.data);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const itemChange = (e) => {
    setItems(Number(e.target.value));
    console.log(e.target.value);
  };
  // console.log(items * (page - 1), items * (page - 1) + items);

  const handlePageChange = (page) => {
    setPage(page);
  };
  // const novelArr = props.novel.map((item) => {
  //   return (
  //     <div>
  //       <img
  //         src={`http://192.168.0.183:9988${item.imageUri}`}
  //         alt={item.title}
  //         className="img"
  //       />
  //     </div>
  //   );
  // });

  return (
<div className="list-wrap">
      <div className="header-bt">
        <div className="header-txt">소설</div>
        <select name="items" onChange={itemChange}>
          <option value="5">5개</option>
          <option value="10">10개</option>
          <option value="15">15개</option>
          <option value="20">20개</option>
        </select>
      </div>
      <div className="get-list">{getClick}</div>
      {novel
        .slice(items * (page - 1), items * (page - 1) + items)
        .map((v, i) => {
          const prici = v.price;
          const price2 = prici.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return (
            <Link to={`/detail/${v.seq}`}>
              <div className="list">
                <div className="list-left">
                  <img
                    src={`http://192.168.0.183:9988${v.imageUri}`}
                    alt={v.title}
                    className="img"
                  />
                </div>
                <div className="list-right">
                  <h3 className="list-title">{v.title}</h3>
                  <div className="list-txt-wrap">
                    <span className="list-txt">{v.wiSeq}</span>
                    <span className="list-txt">{v.publisher}</span>
                  </div>
                  <div className="list-price">{price2}원</div>
                </div>
              </div>
            </Link>
          );
        })}
      <Pagination
        activePage={page}
        itemsCountPerPage={items}
        totalItemsCount={novel.length - 1}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      ></Pagination>
    </div>
  );
};

export default Novel;
// npm install react-js-pagination
// 82 83 84 85 86 88 89 87
