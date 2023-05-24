import axios from "axios";

const KEY = "AIzaSyCHs-8nOq1DNoOyappcv-krp0JKDyWRACM";


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});
