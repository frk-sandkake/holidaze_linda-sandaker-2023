import axios from "axios";
import { LoginFormInputs } from "../form/LoginForm";
import { SignupFormInputs } from "../form/SignupForm";

// Set the base URL for all API requests
axios.defaults.baseURL = "https://api.noroff.dev/api/v1/holidaze";

// Set the authorization header for all requests with the access token from localStorage
const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

// Define the API endpoints
const API = {
  register: "/auth/register",
  login: "/auth/login",
  profile: "/user/profile",
};

// Register a new user
export const fetchRegister = async (user: any) => {
  try {
    const response = await axios.post<SignupFormInputs>(API.register, user);
    return response.data;
  } catch (error: any) {
    if (error.response.status === "Unauthorized") {
      throw new Error("Unauthorized");
    } else if (error.response.data.message === "User already exists") {
      throw new Error("Profile already exists");
    } else {
      throw new Error("Invalid user data");
    }
  }
};

// Log in an existing user
export const fetchLogin = async (credentials: any) => {
  try {
    const response = await axios.post<LoginFormInputs>(API.login, credentials);
    return response;
  } catch (error: any) {
    if (error.response.status === "Unauthorized") {
      throw new Error("Unauthorized");
    } else {
      throw new Error("Invalid user data");
    }
  }
};

// Get the user profile
export const getUserProfile = async () => {
  try {
    const response = await axios.get(API.profile);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === "Unauthorized") {
      throw new Error("Unauthorized");
    } else {
      throw new Error("Failed to get user profile");
    }
  }
};

// Update the user profile
export const updateUserAvatar = async (profile: any) => {
    try {
      const response = await axios.put(API.profile, profile);
      return response.data;
    } catch (error: any) {
      if (error.response.status === "Unauthorized") {
        throw new Error("Unauthorized");
      } else if (error.response.data.message === "Avatar needs to be an valid URL") {
        throw new Error("Avatar needs to be an valid URL");
      } else {
        throw new Error("Failed to update user profile");
      }
    }
};
