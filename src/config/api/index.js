import axios from "axios";

export default async function callAPI({ url, method, data }) {
  const response = await axios({
    url,
    method,
    data,
  }).catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.errors,
      data: null,
    };
    return res;
  }
  const { length } = Object.keys(response.data);
  const res = {
    error: false,
    message: response.data.message,
    data: length > 1 ? response.data : response.data.data,
  };
  return res;
}
