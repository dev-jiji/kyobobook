const requests = {
  fetchNovel: "http://192.168.0.183:9988/api/book/category/1",
  fetchHome: "http://192.168.0.183:9988/api/book/categories",
  fetchCook: "http://192.168.0.183:9988/api/book/category/2",
  fetchHealth: "http://192.168.0.183:9988/api/book/category/3",
  fetchLanguage: "http://192.168.0.183:9988/api/book/category/4",
  fetchComputerIt: "http://192.168.0.183:9988/api/book/category/5",
  fetchDetail: "http://192.168.0.183:9988/api/book/list?size=100",
};

// `주소/image/`${item.imageUri}
export default requests;
