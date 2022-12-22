import Header from "./components/Header";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Novel from "./pages/Novel";
import Cook from "./pages/Cook";
import Health from "./pages/Health";
import Language from "./pages/Language";
import ComputerIT from "./pages/ComputerIT";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import instance from "./api/axios";
import requests from "./api/request";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [home, setHome] = useState([]);
  const [members] = useState([
    { "name": "F-조준영", "photo": "img/m1.jpg" },
    { "name": "F-오한수", "photo": "img/m2.jpg" },
    { "name": "F-옥지은", "photo": "img/m3.jpg" },
    { "name": "B-남현우", "photo": "img/m4.jpg" },
    { "name": "B-김한수", "photo": "img/m5.jpg" },
    { "name": "B-류승지", "photo": "img/m6.jpg" },
    { "name": "B-이영준", "photo": "img/m7.jpg" },
    { "name": "B-정인원", "photo": "img/m8.jpg" }
  ]);

  const [novel, setNovel] = useState([]);
  const [cook, setCook] = useState([]);
  const [health, setHealth] = useState([]);
  const [language, setLanguage] = useState([]);
  const [computerit, setComputerIt] = useState([]);
  const [detail, setDetail] = useState([]);

  const fetchData = async () => {
    // 멤버목록 가져오기
    const params = {
      start: 1,
      count: 5,
    };
    const resultHome = await instance.get(requests.fetchHome, { params });
    setHome(resultHome.data);
    const resultNovel = await instance.get(requests.fetchNovel);
    setNovel(resultNovel.data.data);
    const resultCook = await instance.get(requests.fetchCook, { params });
    setCook(resultCook.data);
    const resultHealth = await instance.get(requests.fetchHealth, { params });
    setHealth(resultHealth.data);
    const resultLanguage = await instance.get(requests.fetchLanguage, {
      params,
    });
    setLanguage(resultLanguage.data);
    const resultComputerit = await instance.get(requests.fetchComputerIt, {
      params,
    });
    setComputerIt(resultComputerit.data);
    const resultDetail = await instance.get(requests.fetchDetail, { params });
    setDetail(resultDetail.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home home={home} />} />
          <Route path="/members" element={<Members members={members} />} />
          <Route path="/novel" element={<Novel novel={novel} />} />
          <Route path="/cook" element={<Cook cook={cook} />} />
          <Route path="/health" element={<Health health={health} />} />
          <Route path="/language" element={<Language language={language} />} />
          <Route
            path="/computerit"
            element={<ComputerIT computerit={computerit} />}
          />
          <Route path="/detail/:id" element={<Detail detail={detail} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
