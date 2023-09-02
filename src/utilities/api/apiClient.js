import axios from "axios";
const axiosClient = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res.status === 401) {
      window.location.href = "https://example.com/login";
    }
    console.error(`Looks like there was a problem. Status Code: ` + res.status);
    return Promise.reject(error);
  }
);

export default axiosClient;
