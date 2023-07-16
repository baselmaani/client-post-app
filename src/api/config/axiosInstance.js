import axios from 'axios';

const axiosInstance = async (method, innerUrl, toSendData) => {
  const tkn = await localStorage.getItem('token');
  const instance = axios.create({
    'Content-Type': 'application/x-www-form-urlencoded',
    baseURL: 'http://localhost:3000',
    headers: {
      authorization: `Bearer ${tkn}`,
    },
  });
  const res = await instance({
    method: method,
    url: innerUrl,
    data: method === 'get' || method === 'delete' ? undefined : toSendData,
    params: method === 'get' || method === 'delete' ? toSendData : undefined,
  });
  return res;
};
export default axiosInstance;
