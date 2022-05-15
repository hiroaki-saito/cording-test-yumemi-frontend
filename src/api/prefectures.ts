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
      headers: { "X-API-KEY": "w8J4PcGkN2hNJKUvIY7xrGxR59nNWfc1NFMpMMLR" },
    })
    .then((res) => {
      console.log(res);
      return res;
    });
};

export default prefecturesAPI;
