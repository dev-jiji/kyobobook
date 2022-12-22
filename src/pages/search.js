import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./../api/request";
import instance from "./../api/axios";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
const Search = (props) => {
  const [text, setText] = React.useState("");
  const names = [
    "Anna",
    "Bob",
    "Ellen",
    "Fred",
    "Greg",
    "Harry",
    "Jim",
    "John",
    "Jose",
    "Sam",
    "Timothy",
  ];
  const [cate, setCate] = useState([]);
  console.log(cate);
  const fetchData = async () => {
    // 멤버목록 가져오기
    const params = {
      start: 1,
      count: 5,
    };

    const resultCate = await instance.get(requests.fetchHeader, { params });
    setCate(resultCate.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="Enter Text"
      />
      <ul>
        {cate.map(
          (v) =>
            v.title.toLowerCase().includes(text.toLowerCase()) && (
              <li>{v.title}</li>
            )
        )}
      </ul>
    </>
  );
};
export default Search;
