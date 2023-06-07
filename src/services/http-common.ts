import axios from "axios";

const prepareHeaders = () => {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : null,
    };
    return headers;
};

const http = axios.create({
    baseURL: "https://api.noroff.dev/api/v1/holidaze",
    headers: prepareHeaders(),
});

export default http;