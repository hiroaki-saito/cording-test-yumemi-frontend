import axios from "axios";

// const apiClient = axios.create({
//   baseURL: "https://opendata.resas-portal.go.jp",
//   responseType: "json",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

const prefecturesAPI = () => {
  axios
    .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      headers: { "X-API-KEY": "" },
    })
    .then((res) => {
      console.log(res);
      return res;
    });
};

export default prefecturesAPI;
