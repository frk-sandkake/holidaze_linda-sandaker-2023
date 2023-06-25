import axios from "axios";

const API_URL = "https://api.noroff.dev/api/v1/holidaze";

export const register = (username: string, email: string, password: string) => {
  return axios.post(API_URL + "/auth/register", {
    username,
    email,
    password,
  });
};

export const login = async (username: string, password: string) => {
  const response = await axios
        .post(API_URL + "/auth/login", {
            username,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};

export default function authHeader() {
  const userStr = localStorage.getItem("user");
  let user = null;
  if (userStr)
    user = JSON.parse(userStr);

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return { Authorization: '' };
  }
}
