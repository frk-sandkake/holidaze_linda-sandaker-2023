import axios from "axios";
import { LoginFormInputs } from "../pages/signup-login/LoginForm";
//import { VenueResponse } from "../redux/types";

const prepareHeaders = () => {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: accessToken ? `Bearer ${accessToken}` : null,
    };
    return headers;
};

const http = axios.create({
    baseURL: "https://api.noroff.dev/api/v1/holidaze",
    timeout: 4000,
    headers: prepareHeaders(),
});

export default http;

// Define the API endpoints
export const API = {
  register: "/auth/register",
  login: "/auth/login",
  profile: "/user/profile",
};

const logIn = (data: any) => {
  return http.post<LoginFormInputs>("/auth/login", data)
}

export const AuthApi = { logIn };
